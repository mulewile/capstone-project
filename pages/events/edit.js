import { useRouter } from "next/router";
import Form from "../../components/Form";

export default function EditEvent({
  isEditing,
  eventToEdit,
  handleUpdateEvents,
}) {
  const router = useRouter();

  const cancelAdd = () => {
    router.push(`/`);
  };

  return (
    <div>
      <Form
        eventToEdit={eventToEdit}
        isEditing={isEditing}
        onClick={cancelAdd}
        handleUpdateEvents={handleUpdateEvents}
      />
    </div>
  );
}
