import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { StyledListItem, StyledList } from "./StyledListLayout";

const StyledListLink = styled.a`
  text-decoration: none;
`;

export default function List() {
  const { data } = useSWR("/api/events", { fallbackData: [] });

  return (
    <>
      <StyledList>
        {data.map((event) => (
          <StyledListLink href={`/events/${event._id}`} key={uuidv4()}>
            <StyledListItem>
              {event.name}: {event.event}
              <p> {event.location}</p>
            </StyledListItem>
          </StyledListLink>
        ))}
      </StyledList>
    </>
  );
}
