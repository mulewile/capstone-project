import styled from "styled-components";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { StyledLoader } from "../Loader";
import { StyledListItem, StyledList } from "./StyledListLayout";
import dataLoadImage from "../../public/images/dataLoad.png";

const StyledListLink = styled.a`
  text-decoration: none;
`;

function eventCountDown(eventDate) {
  const date = new Date(eventDate);
  const currentDate = new Date();

  const timeDifference = date.getTime() - currentDate.getTime();
  const dayResult = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const countdownObject = {
    daysToEvent: dayResult,
  };

  if (countdownObject.daysToEvent >= 2 && countdownObject.daysToEvent <= 7) {
    return `Starts in ${countdownObject.daysToEvent} Days`;
  } else if (countdownObject.daysToEvent === 1) {
    return "Starts Tomorrow";
  } else if (countdownObject.daysToEvent === 0) {
    return "Event is Today 🎉";
  } else if (countdownObject.daysToEvent < 0) {
    return "Elapsed Event";
  } else if (countdownObject.daysToEvent === 7) {
    return "Starts in a Week";
  } else if (countdownObject.daysToEvent === 30 || countdownObject.daysToEvent === 31) {
    return "1 Month Remaining";
  } else if (countdownObject.daysToEvent === 365 || countdownObject.daysToEvent === 366) {
    return "1 Year Remaining";
  } else {
    return `${countdownObject.daysToEvent} Days Remaining`;
  }
}

export default function List() {
  const { data, error } = useSWR("/api/events");

  if (!data) {
    return <StyledLoader src={dataLoadImage} width={375} height={667} alt="Events are loading ...!" />;
  }
  if (error) {
    return <h1>Error fetching events</h1>;
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
              {eventCountDown(event.date)}
            </StyledListItem>
          </StyledListLink>
        ))}
      </StyledList>
    </>
  );
}
