import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { StyledListItem, StyledList } from "./StyledListLayout";

const StyledListLink = styled.a`
  text-decoration: none;
`;

export default function List() {
  const { data, error } = useSWR("/api/events");

  if (error) {
    return <h1>Error fetching events</h1>;
  }

  if (!data) {
    return <h1>Loading events...</h1>;
  }
  return (
    <>
      <StyledList>
        {data.map((event) => (
          <StyledListLink href={`/events/${event._id}`} key={uuidv4()}>
            <StyledListItem>
              {event.name}: {event.event}
              {event.eventLikeStatus ? "❤️" : ""}
              <p> {event.location}</p>
            </StyledListItem>
          </StyledListLink>
        ))}
      </StyledList>
    </>
  );
}
