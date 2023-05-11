import styled from "styled-components";
import Image from "next/image";
import { StyledHeader } from "@/components/Header";
import { StyledFooter } from "@/components/Footer";
import { EnterLink } from "@/components/Link";
import { LinkWrapper } from "@/components/Link";
import homeImage from "../public/images/HomePage.png";

export const StyledSection = styled.div`
  margin: 0, auto;
  padding-bottom: 70px;
`;

export default function HomePage() {
  return (
    <>
      <StyledHeader></StyledHeader>
      <div>
        <Image
          src={homeImage}
          alt="Main image before entering app"
          width={375}
          height={667}
        />
      </div>
      <LinkWrapper>
        <EnterLink href="events/overview">
          <span>ENTER</span>
        </EnterLink>
      </LinkWrapper>
      <StyledFooter>WePlan</StyledFooter>
    </>
  );
}
