import GlobalStyle from "../styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { events as initialEvents } from "../resources/events";

export default function App({ Component, pageProps }) {
  const [events, setEvents] = useState(initialEvents);

  const [isEditing, setIsEditing] = useState(false);
  const [eventToEdit, setEventToEdit] = useState();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const router = useRouter();

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  function handleClickEdit(eventItem) {
    setIsEditing(true);
    setEventToEdit(eventItem);
  }

  function handleUpdateEvents(editedEvent) {
    const newEventArray = events.map((event) =>
      event.id !== editedEvent.id ? event : editedEvent
    );

    setEvents(newEventArray);
    setIsEditing(false);

    router.push(`/`);
  }

  function handleDeleteEvent(id) {
    setEvents(events.filter((event) => event.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        events={events}
        addEvent={addEvent}
        isEditing={isEditing}
        eventToEdit={eventToEdit}
        handleClickEdit={handleClickEdit}
        handleUpdateEvents={handleUpdateEvents}
        handleDeleteEvent={handleDeleteEvent}
      />
    </>
  );
}
