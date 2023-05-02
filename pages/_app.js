import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  // function handleDeleteEvent(id) {
  //   setEvents(events.filter((event) => event.id !== id));
  // }

  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher: async (...args) => {
            const response = await fetch(...args);
            if (!response.ok) {
              throw new Error(`Request with ${JSON.stringify(args)} failed.`);
            }
            return await response.json();
          },
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
