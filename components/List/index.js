import Link from "next/link";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { StyledListItem, StyledList } from "./StyledListLayout";

export default function List() {
  const { data } = useSWR("/api/events", { fallbackData: [] });

  return (
    <>
      <StyledList>
        {data.map((event) => (
          <Link href={`events/${event._id}`} key={uuidv4()}>
            <StyledListItem>
              {event.name}: {event.event}
              <p> {event.location}</p>
            </StyledListItem>
          </Link>
        ))}
      </StyledList>
    </>
  );
}
