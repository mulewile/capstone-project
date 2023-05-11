import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../components/Form";
import { StyledFooter } from "@/components/Footer";

export default function EditEvent() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const { data: event, isLoading, error, mutate } = useSWR(`/api/events/${id}`);

  async function onSubmit(editedEvent) {
    const eventId = editedEvent._id;

    const response = await fetch(eventId ? `/api/events/${eventId}` : null, {
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
  }

  if (!isReady || isLoading || error) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <Form isEditing eventToEdit={event} onSubmit={onSubmit} />
      </div>
      <StyledFooter>WePlan</StyledFooter>
    </>
  );
}
