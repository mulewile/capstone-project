import List from "../components/List";

export default function HomePage({ events }) {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <List events={events} />
    </div>
  );
}
