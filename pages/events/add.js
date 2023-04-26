import { useRouter } from "next/router";
import uuid4 from "uuid4";
import Form from "../../components/Form";

export default function AddEvent({ addEvent }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventObject = Object.fromEntries(formData);

    const id = uuid4();
    const eventData = { ...eventObject, id };

    addEvent(eventData);

    router.push(`/`);
  }

  const cancelAdd = () => {
    router.push(`/`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} onClick={cancelAdd} />
    </>
  );
}
