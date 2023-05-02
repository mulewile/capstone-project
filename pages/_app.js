import GlobalStyle from "../styles";
import useSWR, { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { useState } from "react";

// const fetcher = (url) => fetch(url).then((res) => res.json());
export default function App({ Component, pageProps }) {
  async function addEvent(event) {
    const response = await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify(event),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR("/api/events", {
    fallbackData: [],
  });

  console.log("Fetched ID =====", id);
  console.log("Fetched Data =====", data);
  // const [events, setEvents] = useState(initialEvents);

  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState();

  // function addEvent(newEvent) {
  //   setEvents([...events, newEvent]);
  // }

  function handleClickEdit(eventItem) {
    setIsEditing(true);
    setEventToEdit(eventItem);
  }

  async function handleUpdateEvents(editedEvent) {
    setIsEditing(false);

    {
      const response = await fetch(id ? `/api/events/${id}` : null, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedEvent),
      });
      router.push(`/events/${id}`);
      console.log("id CHECK ====>", id);
      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      }

      console.log("Event edited....");
    }
    // const newEventArray = data.map((event) =>
    //   event.id !== editedEvent.id ? event : editedEvent
    // );

    // setEvents(newEventArray);

    // router.push(`/`);
  }

  function handleDeleteEvent(id) {
    setEvents(events.filter((event) => event.id !== id));
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <Component
          {...pageProps}
          // events={events}
          addEvent={addEvent}
          isEditing={isEditing}
          eventToEdit={eventToEdit}
          handleClickEdit={handleClickEdit}
          handleUpdateEvents={handleUpdateEvents}
          handleDeleteEvent={handleDeleteEvent}
        />
      </SWRConfig>
    </>
  );
}
