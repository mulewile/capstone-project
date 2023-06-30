import styled from "styled-components";
import Image from "next/image";
import { EnterLink } from "@/components/Link";
import { LinkWrapper } from "@/components/Link";
import homeImage from "../public/images/homePage.png";

export const StyledSection = styled.div`
  margin: 0, auto;
  padding-bottom: 70px;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;

export default function HomePage() {
  return (
    <>
      <div>
        <StyledImage
          src={homeImage}
          alt="main image before entering app"
          width={375}
          height={667}
        />
      </div>
      <LinkWrapper>
        <EnterLink href="events/overview">
          <span>ENTER</span>
        </EnterLink>
      </LinkWrapper>
    </>
  );
}
