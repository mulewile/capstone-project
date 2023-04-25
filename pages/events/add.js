import { useRouter } from "next/router";
import Form from "../../components/Form";
import Button from "../../components/Button";

export default function AddEvent({ addEvent }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);

    addEvent(eventData);

    router.push(`/`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="event">Event:</label>
        <input type="text" id="event" name="event" />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label htmlFor="task">Tasks:</label>
        <textarea type="text" id="task" name="task" />
        <label htmlFor="idea">Ideas, Message, Thoughts:</label>
        <textarea type="text" id="idea" name="idea" />
        <label htmlFor="guest">Guests:</label>
        <textarea type="text" id="guest" name="guest" />
        <Button type="submit">Done</Button>
      </Form>
    </>
  );
}
