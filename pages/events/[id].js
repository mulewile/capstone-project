import { useRouter } from "next/router";
import useSWR from "swr";
import { StyledCard } from "../../components/Card";
import Button from "../../components/Button";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/events/${id}` : null, fetcher);

  if (!data) {
    return <h1>No event found.</h1>;
  }

  if (error) {
    return <h1>Error while loading event data.</h1>;
  }

  return (
    <>
      <h1>Details</h1>
      <StyledCard>
        <h2>Name: {data.name}</h2>
        <h2>Event: {data.event}</h2>
        <h2>Date: {data.date}</h2>
        <p>Location: {data.location}</p>
        <p>Tasks: {data.tasks}</p>
        <p>Ideas, Message, Thoughts etc: {data.ideas}</p>
        <p>Guests: {data.guests}</p>
      </StyledCard>
      <Button type="button" onClick={() => router.push("/")}>
        Go Back
      </Button>
    </>
  );
}
