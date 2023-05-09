import styled from "styled-components";
import { StyledLink } from "../Link";
import { SaveButton } from "../Button";
import { StyledHeader } from "../Header";
import { StyledFooter } from "../Footer";
import { LinkWrapper } from "../Link";

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

export default function Form({ onSubmit, isEditing, eventToEdit }) {
  function onEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventObject = Object.fromEntries(formData);
    const eventData = { ...eventToEdit, ...eventObject };

    onSubmit(eventData);
  }

  return (
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
          type="datetime-local"
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
          <label htmlFor="eventBudget">Budget</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="eventBudget"
            name="eventBudget"
            defaultValue={eventToEdit?.eventBudget}
          />
          <label htmlFor="foodCosts">Food & Drinks</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="foodCosts"
            name="foodCosts"
            defaultValue={eventToEdit?.foodCosts}
          />
          <label htmlFor="accomodationCosts">Accomodation</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="accomodationCosts"
            name="accomodationCosts"
            defaultValue={eventToEdit?.accomodationCosts}
          />
          <label htmlFor="transportCosts">Transport</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="transportCosts"
            name="transportCosts"
            defaultValue={eventToEdit?.transportCosts}
          />
          <label htmlFor="giftCosts">Gifts</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="giftCosts"
            name="giftCosts"
            defaultValue={eventToEdit?.giftCosts}
          />
          <label htmlFor="otherEventExpenses">Other Expenses</label>
          <input
            type="number"
            min="0.00"
            max="10000.00"
            step="0.01"
            id="otherEventExpenses"
            name="otherEventExpenses"
            defaultValue={eventToEdit?.otherEventExpenses}
          />
        </fieldset>
        <SaveButton type="submit">{isEditing ? "Update" : "Save"}</SaveButton>
      </StyledForm>
      <LinkWrapper>
        <StyledLink href="/">Cancel</StyledLink>
      </LinkWrapper>
      <StyledFooter></StyledFooter>
    </>
  );
}
