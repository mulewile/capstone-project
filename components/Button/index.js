import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #dcae1d;
  border-radius: 10px;
  padding: 10px;
  color: #12343b;
  font-size: 12px;
  margin-bottom: 8px;
`;

export const SaveButton = styled(StyledButton)`
  display: flex;
  position: relative;
  border: 2px solid black;
  background-color: lightgreen;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  left: 60%;
  color: black;
  font-weight: bold;
`;

export const EditButton = styled(StyledButton)`
  display: flex;
  position: fixed;
  margin: 0;
  background-color: peachpuff;
  left: 50%;
  transform: translateX(-50%);
  bottom: 70px;
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  color: black;
  border: 2px solid black;
  font-weight: bold;
`;

export const DeleteRequestButton = styled(StyledButton)`
  display: flex;
  position: fixed;
  margin: 0;
  border: 2px solid black;
  background-color: orange;
  bottom: 70px;
  left: calc(50% - 190px);
  padding: 0.7rem 1rem;
  border-radius: 0.6rem;
  color: black;
  font-weight: bold;
`;

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
