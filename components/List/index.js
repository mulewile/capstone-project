import uuid4 from "uuid4";
import { StyledListItem, StyledList } from "./StyledListLayout";
import { events } from "@/resources/events";

export default function List() {
  return (
    <StyledList>
      {events.map((event) => (
        <StyledListItem key={uuid4()}>
          {event.name}: {event.event}
          <p> {event.location}</p>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
