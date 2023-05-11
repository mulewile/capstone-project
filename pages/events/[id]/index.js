import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Button from "@/components/Button";
import Expenses from "@/components/Expenses";
import { StyledLoader } from "@/components/Loader";
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
import loadImage from "../../../public/images/pageLoad.png";

const StyledCardWrapper = styled.div`
  flex: 1;
  overflow: auto;
  padding: 1rem;
`;

function formatDate(eventDate) {
  const date = new Date(eventDate);
  const formatedEventDate = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()} hrs`;

  return formatedEventDate;
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
    return (
      <StyledLoader
        src={loadImage}
        width={375}
        height={667}
        alt="Events are loading ...!"
      />
    );
  }

  if (!event) {
    return <h1>No event found.</h1>;
  }

  async function handleDeleteEvent() {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });

    router.push("/events/overview");

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

    router.push("/events/overview");

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
              <Expenses />
              <EventLikeButton type="button" onClick={handleLikeEvent}>
                {event.eventLikeStatus ? "Unlike" : "Like"}
              </EventLikeButton>
            </StyledCard>
          </StyledCardWrapper>
          <LinkWrapper>
            <StyledLink href="/events/overview">
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
