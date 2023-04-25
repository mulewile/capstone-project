import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { StyledListItem, StyledList } from "./StyledListLayout";

import Button from "../Button";

export default function List({ events }) {
  const router = useRouter();

  return (
    <>
      <StyledList>
        {events.map((event) => (
          <Link key={uuidv4()} href={`events/${event.id}`}>
            <StyledListItem>
              {event.name}: {event.event}
              <p> {event.location}</p>
            </StyledListItem>
          </Link>
        ))}
      </StyledList>
      <Link href={`events/add`}>
        {" "}
        <Button>Add</Button>
      </Link>
    </>
  );
}
