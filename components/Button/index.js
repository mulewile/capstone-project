import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #dcae1d;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  color: #12343b;
  font-size: 12px;
  margin-bottom: 8px;
`;

export default function Button({ children, type, onClick }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
