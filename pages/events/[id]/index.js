import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import { StyledCard } from "../../../components/Card";
import { StyledHeader } from "../../../components/Header";
import { StyledFooter } from "../../../components/Footer";
import {
  StyledModalWrapper,
  StyledModalContent,
} from "../../../components/Modal";
import Button from "../../../components/Button";

export default function EventDetails() {
  const [deleteModal, setDeleteModal] = useState(false);

  function handleModal() {
    setDeleteModal(!deleteModal);
  }

  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const {
    data: event,
    isLoading,
    error,
  } = useSWR(id ? `/api/events/${id}` : null);

  if (!event) {
    return <h1>No event found.</h1>;
  }
  async function handleDeleteEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });

    router.push("/");

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }
  }

  if (!isReady || isLoading || error) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <StyledHeader>Details</StyledHeader>
      {deleteModal ? (
        <>
          <StyledModalWrapper>
            <StyledModalContent>
              <h2>What would you like to do?</h2>
            </StyledModalContent>
            <Button type="button" onClick={handleDeleteEvent}>
              Delete
            </Button>
            <Button type="button" onClick={() => setDeleteModal(false)}>
              Keep
            </Button>
            <Button
              type="button"
              onClick={() => router.push(`/events/${id}/edit`)}
            >
              Edit
            </Button>
          </StyledModalWrapper>
        </>
      ) : (
        <>
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
              router.push(`/events/${id}/edit`);
            }}
          >
            Edit
          </Button>
          <Button
            type="button"
            onClick={() => {
              handleModal();
            }}
          >
            Delete
          </Button>
        </>
      )}
      <StyledFooter></StyledFooter>
    </>
  );
}
