import { useRouter } from "next/router";
import useSWR from "swr";
import Form from "../../../components/Form";

export default function EditEvent() {
  const router = useRouter();
  const { id } = router.query;
  const { data: event, isLoading, error } = useSWR(`/api/events/${id}`);

  const cancelAdd = () => {
    router.push(`/`);
  };

  async function handleUpdateEvents(editedEvent) {
    const eventId = editedEvent._id;

    {
      const response = await fetch(eventId ? `/api/events/${eventId}` : null, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedEvent),
      });

      if (!response.ok) {
        console.error(`Error: ${response.status}`);
      } else {
        router.push(`/events/${eventId}`);
      }
    }
  }
  return (
    <div>
      <Form
        isEditing
        eventToEdit={event}
        onClick={cancelAdd}
        handleUpdateEvents={handleUpdateEvents}
      />
    </div>
  );
}
