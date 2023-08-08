import styled from "styled-components";
import { StyledLink } from "../Link";
import { SaveButton } from "../Button";
import { default as currencies } from "../../db/currencies.json";
import { LinkWrapper } from "../Link";
import uuid4 from "uuid4";

export const StyledForm = styled.form`
  max-width: 375px;
  border-radius: 20px;
  padding: 1rem;
  margin: 1rem;
  background-color: white;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
  margin-top: 80px;
  margin-bottom: 90px;

  input {
    display: grid;
    border-radius: 5px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 13px;
  }

  textarea {
    display: grid;
    border-radius: 5px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 13px;
  }
  fieldset {
    border-radius: 10px;
  }

  select {
    display: grid;
    border-radius: 5px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 13px;
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
      <StyledForm onSubmit={onEdit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="e.g. James, Mum"
          defaultValue={eventToEdit?.name}
          required
        />
        <label htmlFor="event">Event:</label>
        <input
          type="text"
          id="event"
          name="event"
          placeholder="e.g. Wedding, Conference"
          defaultValue={eventToEdit?.event}
          required
          aria-label="Enter an event"
        />
        <label htmlFor="date">Date:</label>
        <input
          type="datetime-local"
          id="date"
          name="date"
          defaultValue={eventToEdit?.date ? new Date(eventToEdit.date).toISOString().slice(0, 16) : null}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="e.g. Town Hall, Tokyo"
          defaultValue={eventToEdit?.location}
        />
        <label htmlFor="tasks">Tasks:</label>
        <textarea
          type="text"
          maxLength={200}
          id="tasks"
          name="tasks"
          placeholder="e.g. Book Hall, Write Speech, Bake"
          defaultValue={eventToEdit?.tasks}
        />
        <label htmlFor="ideas">Ideas, Message, Thoughts:</label>
        <textarea
          type="text"
          maxLength={300}
          id="ideas"
          name="ideas"
          placeholder="e.g. Photo Booth, Movie ticket as gift"
          defaultValue={eventToEdit?.ideas}
        />
        <label htmlFor="guests">Guests:</label>
        <textarea
          type="text"
          maxLength={100}
          id="guests"
          name="guests"
          placeholder="e.g. 20, Kim, Mat"
          defaultValue={eventToEdit?.guests}
        />
        <fieldset>
          <legend>EXPENSES</legend>
          <label htmlFor="currency">Currency</label>
          <select name="currency" id="currency" required>
            <option value="">--{eventToEdit?.currency ? eventToEdit.currency : "choose"}--</option>
            {currencies.map((currency) => (
              <option key={uuid4()} value={currency.symbol}>
                {currency.symbol}
              </option>
            ))}
          </select>
          <label htmlFor="eventBudget">Budget</label>
          <input
            type="number"
            min={0}
            id="eventBudget"
            name="eventBudget"
            placeholder="amount"
            defaultValue={eventToEdit?.eventBudget}
          />
          <label htmlFor="foodCosts">Food & Drinks</label>
          <input
            type="number"
            min={0}
            id="foodCosts"
            name="foodCosts"
            placeholder="amount"
            defaultValue={eventToEdit?.foodCosts}
          />
          <label htmlFor="accomodationCosts">Accomodation</label>
          <input
            type="number"
            min={0}
            id="accomodationCosts"
            name="accomodationCosts"
            placeholder="amount"
            defaultValue={eventToEdit?.accomodationCosts}
          />
          <label htmlFor="transportCosts">Transport</label>
          <input
            type="number"
            min={0}
            id="transportCosts"
            name="transportCosts"
            placeholder="amount"
            defaultValue={eventToEdit?.transportCosts}
          />
          <label htmlFor="giftCosts">Gifts</label>
          <input
            type="number"
            min={0}
            id="giftCosts"
            name="giftCosts"
            placeholder="amount"
            defaultValue={eventToEdit?.giftCosts}
          />
          <label htmlFor="otherEventExpenses">Other Expenses</label>
          <input
            type="number"
            min={0}
            id="otherEventExpenses"
            name="otherEventExpenses"
            placeholder="amount"
            defaultValue={eventToEdit?.otherEventExpenses}
          />
        </fieldset>
        <SaveButton type="submit">{isEditing ? "Update" : "Save"}</SaveButton>
      </StyledForm>
      <LinkWrapper>
        <StyledLink href="/events/overview">X</StyledLink>
      </LinkWrapper>
    </>
  );
}
