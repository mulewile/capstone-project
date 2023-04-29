import List from "../components/List";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";
export default function HomePage({ events }) {
  return (
    <div>
      <StyledHeader>Upcoming Events</StyledHeader>
      <List events={events} />
      <StyledFooter></StyledFooter>
    </div>
  );
}
