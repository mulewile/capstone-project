import styled from "styled-components";
import Button from "../Button";
import { StyledHeader } from "../Header";
import { StyledFooter } from "../Footer";
export const StyledForm = styled.form`
  max-width: 368px;
  border: 3px solid #dcae1d;
  border-radius: 20px;
  padding: 1rem;
  margin: 0.5rem;
  background-color: #cae4db;
  margin-top: 80px;
  input {
    display: grid;
    margin-bottom: 8px;
    font-size: 12px;
  }

  textarea {
    display: grid;
    margin-bottom: 8px;
    font-size: 16px;
    color: #3a4660;
  }
`;

export default function Form({
  onSubmit,
  onClick,
  isEditing,
  eventToEdit,
  handleUpdateEvents,
}) {
  function onEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventObject = Object.fromEntries(formData);

    const eventData = { ...eventToEdit, ...eventObject };

    handleUpdateEvents(eventData);
  }

  return (
    <>
      {isEditing ? (
        <>
          <StyledHeader>Edit Event</StyledHeader>
          <StyledForm onSubmit={onEdit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={eventToEdit?.name}
              required
            />
            <label htmlFor="event">Event:</label>
            <input
              type="text"
              id="event"
              name="event"
              defaultValue={eventToEdit?.event}
              required
            />
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              defaultValue={eventToEdit?.date}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={eventToEdit?.location}
            />
            <label htmlFor="tasks">Tasks:</label>
            <textarea
              type="text"
              id="tasks"
              name="tasks"
              defaultValue={eventToEdit?.tasks}
            />
            <label htmlFor="ideas">Ideas, Message, Thoughts:</label>
            <textarea
              type="text"
              id="ideas"
              name="ideas"
              defaultValue={eventToEdit?.ideas}
            />
            <label htmlFor="guests">Guests:</label>
            <textarea
              type="text"
              id="guests"
              name="guests"
              defaultValue={eventToEdit?.guests}
            />
            <Button type="submit">Update</Button>
          </StyledForm>
          <Button onClick={onClick}>Cancel</Button>
        </>
      ) : (
        <>
          <StyledForm onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="event">Event:</label>
            <input type="text" id="event" name="event" required />
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
            <Button type="submit">Save</Button>
          </StyledForm>
          <Button onClick={onClick}>Cancel</Button>
        </>
      )}
      <StyledFooter></StyledFooter>
    </>
  );
}
