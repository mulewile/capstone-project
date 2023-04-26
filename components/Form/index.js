import styled from "styled-components";
import Button from "../../components/Button";

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

export default function Form({ onSubmit, onClick }) {
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="event">Event:</label>
        <input type="text" id="event" name="event" />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" />
        <label htmlFor="tasks">Tasks:</label>
        <textarea type="text" id="tasks" name="tasks" />
        <label htmlFor="ideas">Ideas, Message, Thoughts:</label>
        <textarea type="text" id="ideas" name="ideas" />
        <label htmlFor="guests">Guests:</label>
        <textarea type="text" id="guests" name="guests" />
        <Button type="submit">Done</Button>
      </StyledForm>
      <Button onClick={onClick}>Cancel</Button>
    </>
  );
}
