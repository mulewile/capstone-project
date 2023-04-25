import Link from "next/link";
import { StyledListItem, StyledList } from "./StyledListLayout";
import { events } from "@/resources/events";

export default function List() {
  return (
    <StyledList>
      {events.map((event) => (
        <Link key={event.id} href={`events/${event.id}`}>
          <StyledListItem>
            {event.name}: {event.event}
            <p> {event.location}</p>
          </StyledListItem>
        </Link>
      ))}
    </StyledList>
  );
}
