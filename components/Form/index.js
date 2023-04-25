import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 768px;
  border: 3px solid #dcae1d;
  border-radius: 20px;
  padding: 1rem;
  margin: 0.25rem;
  background-color: #cae4db;

  input {
    display: grid;
    margin-bottom: 8px;
    font-size: 16px;
  }
  textarea {
    display: grid;
    margin-bottom: 8px;
    font-size: 16px;
    color: #3a4660;
  }
`;

export default function Form({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
