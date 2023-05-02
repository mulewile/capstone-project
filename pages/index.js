import List from "../components/List";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";
export default function HomePage() {
  return (
    <div>
      <StyledHeader>Upcoming Events</StyledHeader>
      <List />
      <StyledFooter></StyledFooter>
    </div>
  );
}
