import GlobalStyle from "../styles";
import { useState } from "react";
import { events as initialEvents } from "../resources/events";

export default function App({ Component, pageProps }) {
  const [events, setEvents] = useState(initialEvents);

  function addEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} events={events} addEvent={addEvent} />
    </>
  );
}
