import { useRouter } from "next/router";
import { events } from "@/resources/events";
import { StyledCard } from "@/components/Card";

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.push(`/`);
  };

  const eventData = events.find((event) => event.id === id);
  const { name, event, date, location, tasks, ideas, guests } = eventData;

  return (
    <>
      <h1>Details</h1>
      {event ? (
        <StyledCard>
          <h2>Name: {name}</h2>
          <h2>Event: {event}</h2>
          <h2>Date: {date}</h2>
          <p>Location: {location}</p>
          <p>Tasks: {tasks}</p>
          <p>Ideas, Message, Thoughts etc: {ideas}</p>
          <p>Guests: {guests}</p>
        </StyledCard>
      ) : (
        <p>No event found.</p>
      )}
      <button onClick={goBack}>Go Back</button>
    </>
  );
}
