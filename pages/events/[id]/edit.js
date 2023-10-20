import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../components/Form";
import { StyledFooter, StyledHeader } from "@/components";

export default function EditEvent() {
  const router = useRouter();
  const {
    isReady,
    query: { id },
  } = router;
  const { data: event, isLoading, error, mutate } = useSWR(id ? `/api/events/${id}` : null);

  if (!event) {
    return <h1>No Event Found</h1>;
  }

  async function onSubmit(editedEvent) {
    const eventId = editedEvent._id;
    const apiUrl = eventId ? `/api/events/${eventId}` : null;

    try {
      const response = await fetch(apiUrl, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedEvent),
      });

      if (response.ok) {
        mutate(editedEvent);
        router.push(`/events/${eventId}`);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  if (!isReady || isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StyledHeader>Edit Event</StyledHeader>
      <Form eventToEdit={event} onSubmit={onSubmit} />
      <StyledFooter>WePlan</StyledFooter>
    </>
  );
}
