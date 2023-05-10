import styled from "styled-components";

export const StyledLink = styled.a`
  padding: 0.7rem 1.5rem;
  border-radius: 10px;
  background-color: #2a4f72;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

export const EnterLink = styled(StyledLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.7rem 1.5rem;
  background-color: #ffdab9;
  color: #1e3766;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.8);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #2a4f72;
    color: white;
  }
`;

export const ExitLink = styled(StyledLink)`
  display: flex;
  position: fixed;
  left: 36%;
  top: 87.5%;
  transform: translate(-50%, -50%);
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  bottom: 60px;
  width: 375px;
  margin: 0 auto;
  padding: 10px;
`;
