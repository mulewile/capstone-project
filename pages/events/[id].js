import { useRouter } from "next/router";
import { StyledCard } from "../../components/Card";
import Button from "../../components/Button";
import Link from "next/link";

export default function EventDetails({ events }) {
  const router = useRouter();
  const { id } = router.query;

  const event = events.find((event) => event.id === id);

  if (!event) {
    return <h1>No event found.</h1>;
  }

  return (
    <>
      <h1>Details</h1>
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
      <Link href={`/events/${id}`}>
        <Button type="button">Edit</Button>
      </Link>
    </>
  );
}
