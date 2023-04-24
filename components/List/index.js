import { StyledList } from "./StyledList";
import { events } from "@/resources/events";
import uuid4 from "uuid4";

export default function List() {
  console.log("Hello", events);

  return (
    <ul>
      {events.map((event) => (
        <StyledList key={uuid4()}>
          {event.name}: {event.event}
          <p> {event.location}</p>
        </StyledList>
      ))}
    </ul>
  );
}
