import List from "../components/List";
import styled from "styled-components";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";
import { StyledLink } from "@/components/Link";
import { LinkWrapper } from "@/components/Link";
export const StyledSection = styled.div`
  margin: 0, auto;
  padding-bottom: 70px;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeader>Upcoming Events</StyledHeader>
      <StyledSection>
        <List />
      </StyledSection>
      <LinkWrapper>
        <StyledLink href="events/add">+</StyledLink>
      </LinkWrapper>
      <StyledFooter></StyledFooter>
    </>
  );
}
