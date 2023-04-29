import { useRouter } from "next/router";
import uuid4 from "uuid4";
import Form from "../../components/Form";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";

export default function AddEvent({ addEvent, events }) {
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
      <StyledHeader>Add an Event</StyledHeader>
      <Form onSubmit={handleSubmit} onClick={cancelAdd} events={events} />
      <StyledFooter></StyledFooter>
    </>
  );
}
