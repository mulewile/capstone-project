import styled from "styled-components";
import useSWR from "swr";
import { v4 as uuidv4 } from "uuid";
import { StyledListItem, StyledList } from "./StyledListLayout";

const StyledListLink = styled.a`
  text-decoration: none;
`;

function eventCountDown(eventDate) {
  const date = new Date(eventDate);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const eventMonth = date.getMonth();
  const eventDay = date.getDate();

  function getCurrentWeek(currentDay) {
    const currentWeek = currentDay / 7;
    console.log("Week", Math.floor(currentWeek));
    return currentWeek;
  }

  function getEventWeeks(eventDays) {
    const eventWeeks = eventDays / 7;
    console.log("Week", Math.floor(eventWeeks));
    return eventWeeks;
  }

  const currentWeek = getCurrentWeek(currentDay);
  const eventWeeks = getEventWeeks(eventDay);
  const monthResult = eventMonth > currentMonth ? eventMonth - currentMonth : 0;
  const weekResult =
    Math.floor(eventWeeks) >= Math.floor(currentWeek)
      ? Math.floor(eventWeeks)
      : 0;
  const dayResult = eventDay > currentDay ? eventDay - currentDay : 0;

  const countdownObject = {
    daysToEvent: dayResult,
    weeksToEvent: weekResult,
    monthsToEvent: monthResult,
  };

  if (countdownObject.daysToEvent > 28) {
    return `${countdownObject.monthsToEvent} Month(s), ${countdownObject.weeksToEvent} Week(s) Remaining!`;
  } else if (
    countdownObject.daysToEvent > 7 &&
    countdownObject.daysToEvent < 21
  ) {
    return `${countdownObject.weeksToEvent} Week(s), ${countdownObject.daysToEvent} Day(s) Remaining`;
  } else if (countdownObject.daysToEvent > 1) {
    return `Event Starts in ${countdownObject.daysToEvent} Day(s)`;
  } else if (countdownObject.daysToEvent === 1) {
    return "Event Starts Tomorrow";
  } else {
    return "Event is Today 🎉";
  }
}

export default function List() {
  const { data, error } = useSWR("/api/events");

  if (!data) {
    return <h1>Loading events...</h1>;
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
              <p>{eventCountDown(event.date)}</p>
            </StyledListItem>
          </StyledListLink>
        ))}
      </StyledList>
    </>
  );
}
