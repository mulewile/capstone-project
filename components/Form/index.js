import styled from "styled-components";
import { StyledLink } from "../Link/StyledLinks";
import { SaveButton, UpdateButton } from "../Button";
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
  margin-bottom: 90px;

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
              maxLength={200}
              id="tasks"
              name="tasks"
              defaultValue={eventToEdit?.tasks}
            />
            <label htmlFor="ideas">Ideas, Message, Thoughts:</label>
            <textarea
              type="text"
              maxLength={300}
              id="ideas"
              name="ideas"
              defaultValue={eventToEdit?.ideas}
            />
            <label htmlFor="guests">Guests:</label>
            <textarea
              type="text"
              maxLength={100}
              id="guests"
              name="guests"
              defaultValue={eventToEdit?.guests}
            />
            <fieldset>
              <legend>EXPENSES</legend>
              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="budget"
                name="budget"
                defaultValue={eventToEdit?.budget}
              />
              <label htmlFor="food">Food & Drinks</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="food"
                name="food"
                defaultValue={eventToEdit?.food}
              />
              <label htmlFor="Accomodation">Accomodation</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="accomodation"
                name="accomodation"
                defaultValue={eventToEdit?.accomodation}
              />
              <label htmlFor="transport">Transport</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="transport"
                name="transport"
                defaultValue={eventToEdit?.transport}
              />
              <label htmlFor="gifts">Gifts</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="gifts"
                name="gifts"
                defaultValue={eventToEdit?.gifts}
              />
              <label htmlFor="otherExpenses">Other Expenses</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="otherExpenses"
                name="otherExpenses"
                defaultValue={eventToEdit?.otherExpenses}
              />
            </fieldset>
            <UpdateButton type="submit">Update</UpdateButton>
          </StyledForm>
          <StyledLink href="/">Cancel</StyledLink>
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
            <textarea type="text" maxLength={300} id="tasks" name="tasks" />
            <label htmlFor="ideas">Ideas, Message, Thoughts:</label>
            <textarea type="text" maxLength={400} id="ideas" name="ideas" />
            <label htmlFor="guests">Guests:</label>
            <textarea type="text" maxLength={100} id="guests" name="guests" />
            <fieldset>
              <legend>EXPENSES</legend>
              <label htmlFor="budget">Budget</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="budget"
                name="budget"
              />
              <label htmlFor="food">Food & Drinks</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="food"
                name="food"
              />
              <label htmlFor="Accomodation">Accomodation</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="accomodation"
                name="accomodation"
              />
              <label htmlFor="transport">Transport</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="transport"
                name="transport"
              />
              <label htmlFor="gifts">Gifts</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="gifts"
                name="gifts"
              />
              <label htmlFor="otherExpenses">Other Expenses</label>
              <input
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                id="otherExpenses"
                name="otherExpenses"
              />
            </fieldset>
            <SaveButton type="submit">Save</SaveButton>
          </StyledForm>
          <StyledLink href="/">Cancel</StyledLink>
        </>
      )}
      <StyledFooter></StyledFooter>
    </>
  );
}
