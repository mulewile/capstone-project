import styled, { css } from "styled-components";

export const StyledLink = styled.a`
  display: flex;
  position: fixed;
  border: 2px solid black;
  max-width: 100%;
  background-color: peachpuff;
  bottom: 70px;
  left: 20px;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  color: black;
  left: calc(50% - 190px);
  text-decoration: none;
  font-weight: bold;
`;
export const CenteredLink = styled(StyledLink)`
  ${css`
    left: calc(80% - 190px);
  `}
`;

export const RightLink = styled(StyledLink)`
  ${css`
    right: 20px;
  `}
`;