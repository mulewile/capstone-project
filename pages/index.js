import List from "../components/List";
import styled from "styled-components";
import { StyledHeader, StyledFooter, StyledLink } from "@/components";

export const StyledSection = styled.div`
  margin: 0, auto;
  margin-bottom: 70px;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeader>Upcoming Events</StyledHeader>
      <StyledSection>
        <List />
      </StyledSection>
      <div>
        <StyledLink href="events/add">Add +</StyledLink>
      </div>
      <StyledFooter></StyledFooter>
    </>
  );
}
