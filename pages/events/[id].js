import { useRouter } from "next/router";
import { StyledCard } from "../../components/Card";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";
import Button from "@/components/Button";

export default function EventDetails({
  handleClickEdit,
  handleDeleteEvent,
  events,
}) {
  const router = useRouter();
  const { id } = router.query;

  const event = events.find((event) => event.id === id);

  if (!event) {
    return <h1>No event found.</h1>;
  }

  return (
    <>
      <StyledHeader>Details</StyledHeader>
      <StyledCard>
        <h2>Name: {event.name}</h2>
        <h2>Event: {event.event}</h2>
        <h2>Date: {event.date}</h2>
        <p>Location: {event.location}</p>
        <p>Tasks: {event.tasks}</p>
        <p>Ideas, Message, Thoughts etc: {event.ideas}</p>
        <p>Guests: {event.guests}</p>
      </StyledCard>
      <Button type="button" onClick={() => router.push("/")}>
        Go Back
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleClickEdit(event);
          router.push(`/events/edit`);
        }}
      >
        Edit
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleDeleteEvent(id);
          router.push("/");
        }}
      >
        Delete
      </Button>

      <StyledFooter></StyledFooter>
    </>
  );
}
