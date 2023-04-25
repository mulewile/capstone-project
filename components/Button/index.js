import styled from "styled-components";

export const StyledButton = styled.button`
  border: 3px solid #dcae1d;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background-color: #f9c5bd;
  color: #12343b;
  font-size: 16px;
  margin-bottom: 8px;
`;

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
