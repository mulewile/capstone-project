import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 0.6rem;
  background-color: #2a4f72;
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
  cursor: pointer;
  border: none;
`;

export const SaveButton = styled(StyledButton)`
  display: flex;
  position: relative;
  margin-top: 20px;
  font-size: 13px;
  z-index: 1;
`;

export const EditButton = styled(StyledButton)`
  display: flex;
  position: fixed;
  margin: 0;
  bottom: 70px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
`;

export const DeleteRequestButton = styled(StyledButton)`
  display: flex;
  position: fixed;
  margin: 0;
  background-color: #7c677f;
  bottom: 70px;
  left: calc(50% - 170px);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #990000;
  }
`;

export const DeleteConfirmButton = styled(StyledButton)`
  margin-left: 2.6rem;
  background-color: #7c677f;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #990000;
  }
`;

export const EventLikeButton = styled(StyledButton)`
  background-color: #2a4f72;
  font-size: 12px;
  padding: 0.5rem 1rem;
`;

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
