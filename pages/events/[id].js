import { useRouter } from "next/router";
import { events } from "@/resources/events";
import { StyledCard } from "@/components/Card";

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.push(`/`);
  };

  const event = events.find((event) => event.id === id);

  return (
    <>
      <h1>Details</h1>
      {event ? (
        <StyledCard>
          <h2>Name: {event.name}</h2>
          <h2>Event: {event.event}</h2>
          <h2>Date: {event.date}</h2>
          <p>Location: {event.location}</p>
          <p>Tasks: {event.tasks}</p>
          <p>Ideas, Message, Thoughts etc: {event.ideas}</p>
          <p>Guests: {event.guests}</p>
        </StyledCard>
      ) : (
        <p>No event found.</p>
      )}
      <button onClick={goBack}>Go Back</button>
    </>
  );
}
