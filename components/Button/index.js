import styled from "styled-components";

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 10px;
  color: #12343b;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const SaveButton = styled(StyledButton)`
  display: flex;
  position: relative;
  background-color: peachpuff;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  color: black;
  font-size: 13px;
  font-weight: bold;
`;

export const EditButton = styled(StyledButton)`
  display: flex;
  position: fixed;
  margin: 0;
  background-color: #7c677f;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  color: white;
  font-size: 13px;
  font-weight: bold;
`;

export const DeleteRequestButton = styled(StyledButton)`
  display: flex;
  position: fixed;
  margin: 0;
  background-color: #ff9aa2;
  bottom: 70px;
  left: calc(50% - 170px);
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  color: black;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff9aa2;
    box-shadow: 0 0 5px #ff9aa2, 0 0 10px #ff9aa2, 0 0 20px #ff9aa2,
      0 0 40px #ff9aa2;
  }
`;

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
