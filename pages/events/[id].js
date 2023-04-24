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

  return (
    <>
      <h1>Details</h1>
      {event ? (
        <StyledCard>
          <h2>Name: {eventData.name}</h2>
          <h2>Event: {eventData.event}</h2>
          <h2>Date: {eventData.date}</h2>
          <p>Location: {eventData.location}</p>
          <p>Tasks: {eventData.tasks}</p>
          <p>Ideas, Message, Thoughts etc: {eventData.ideas}</p>
          <p>Guests: {eventData.guests}</p>
        </StyledCard>
      ) : (
        <p>No event found.</p>
      )}
      <button onClick={goBack}>Go Back</button>
    </>
  );
}
