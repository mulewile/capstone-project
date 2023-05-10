import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Button from "@/components/Button";
import { useState } from "react";
import { StyledCard } from "@/components/Card";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";
import { StyledModalWrapper, StyledModalContent } from "@/components/Modal";
import { StyledLink } from "@/components/Link";
import {
  EventLikeButton,
  DeleteConfirmButton,
  DeleteRequestButton,
  EditButton,
} from "@/components/Button";
import { LinkWrapper } from "@/components/Link";

const StyledCardWrapper = styled.div`
  flex: 1;
  overflow: auto;
  padding: 1rem;
`;
function formatDate(timeStamp) {
  const date = new Date(timeStamp);
  return `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
}

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

  if (!isReady || isLoading || error) {
    return <h1>Loading...</h1>;
  }

  if (!event) {
    return <h1>No event found.</h1>;
  }

  const eventFunds = event.eventBudget;

  const initialExpenses = [
    event.foodCosts,
    event.accomodationCosts,
    event.transportCosts,
    event.giftCosts,
    event.otherEventExpenses,
  ];

  const totalExpenses = initialExpenses.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

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
  async function handleLikeEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ eventLikeStatus: !event.eventLikeStatus }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    router.push("/");

    if (!response.ok) {
      console.error(`Error: ${response.status}`);
      return;
    }
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
            <DeleteConfirmButton type="button" onClick={handleDeleteEvent}>
              Delete
            </DeleteConfirmButton>
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
              <p>
                Event: <span>{event.event}</span>
              </p>
              <p>
                Date: <span>{formatDate(event.date)}</span>
              </p>
              <p>
                Location: <span>{event.location}</span>
              </p>
              <p>
                Tasks: <span>{event.tasks}</span>
              </p>
              <p>
                Ideas, Message, Thoughts etc: <span>{event.ideas}</span>
              </p>
              <p>
                Guests: <span>{event.guests}</span>
              </p>
              <h3>EXPENSES</h3>
              <h4>AVAILABLE FUNDS ${event.eventBudget}</h4>
              <dl>
                <dt>Food & Drinks</dt>
                <dd>${event.foodCosts}</dd>
                <dt>Accomodation</dt>
                <dd>${event.accomodationCosts}</dd>
                <dt>Transport</dt>
                <dd>${event.transportCosts}</dd>
                <dt>Gifts</dt>
                <dd>${event.giftCosts}</dd>
                <dt>Other Expenses</dt>
                <dd>${event.otherEventExpenses}</dd>
              </dl>
              {totalExpenses > 0.01 ? (
                <h4>TOTAL EXPENSES ${totalExpenses}</h4>
              ) : null}
              {totalExpenses > eventFunds ? (
                <h4>BUDGET DEFICIT ${totalExpenses - eventFunds}</h4>
              ) : (
                totalExpenses > 0.01 && (
                  <h4>REMAINING FUNDS ${eventFunds - totalExpenses}</h4>
                )
              )}
              <EventLikeButton type="button" onClick={handleLikeEvent}>
                {event.eventLikeStatus ? "Unlike" : "Like"}
              </EventLikeButton>
            </StyledCard>
          </StyledCardWrapper>
          <LinkWrapper>
            <StyledLink href="/">
              <span>Back</span>
            </StyledLink>
          </LinkWrapper>
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
      <StyledFooter>WePlan</StyledFooter>
    </>
  );
}
