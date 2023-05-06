import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { useState } from "react";
import {
  StyledCard,
  StyledHeader,
  StyledFooter,
  StyledModalWrapper,
  StyledModalContent,
  StyledLink,
  Button,
  DeleteRequestButton,
  EditButton,
} from "@/components";

const StyledCardWrapper = styled.div`
  flex: 1;
  overflow: auto;
  padding: 1rem;
`;

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
          </StyledModalWrapper>
        </>
      ) : (
        <>
          <StyledCardWrapper>
            <StyledCard>
              <h2>Name: {event.name}</h2>
              <h2>Event: {event.event}</h2>
              <h2>Date: {event.date}</h2>
              <p>Location: {event.location}</p>
              <p>Tasks: {event.tasks}</p>
              <p>Ideas, Message, Thoughts etc: {event.ideas}</p>
              <p>Guests: {event.guests}</p>
              <h3>EXPENSES</h3>
              <h4>Budget ${event.budget}</h4>
              <p>Food & Drinks ${event.food}</p>
              <p>Accomodation ${event.accomodation}</p>
              <p>Transport ${event.transport}</p>
              <p>Gifts ${event.gifts}</p>
              <p>Other Expenses ${event.otherExpenses}</p>
              {event.food > 0 ||
              event.accomodation > 0 ||
              event.transport > 0 ||
              event.gifts > 0 ||
              event.otherExpenses > 0 ? (
                <h4>
                  TOTAL $
                  {event.food +
                    event.accomodation +
                    event.transport +
                    event.gifts +
                    event.otherExpenses}
                </h4>
              ) : (
                <h4>TOTAL $ 0</h4>
              )}
            </StyledCard>
          </StyledCardWrapper>
          <StyledLink href="/">Go Back</StyledLink>
          <EditButton onClick={() => router.push(`/events/${id}/edit`)}>
            Edit
          </EditButton>
          <DeleteRequestButton
            type="button"
            onClick={() => {
              handleModal();
            }}
          >
            Delete
          </DeleteRequestButton>
        </>
      )}
      <StyledFooter></StyledFooter>
    </>
  );
}
