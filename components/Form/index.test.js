import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from ".";

test("renders a heading", () => {
  render(<Form isEditing />);
  const heading = screen.getByRole("heading", {
    name: /Edit Event/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders the cancle link whe user decides not to add an event", () => {
  render(<Form isEditing />);
  const cancelLink = screen.getByRole("link", {
    name: /Cancel/i,
  });
  expect(cancelLink).toHaveAttribute("href", "/");
  expect(cancelLink).toBeInTheDocument();
});

test("it calls the handleUpdateEvents if isEditing is true after user inputs data", async () => {
  const user = userEvent.setup();
  const handleUpdateEvents = jest.fn();
  render(<Form handleUpdateEvents={handleUpdateEvents} isEditing />);
  const nameInput = screen.getByLabelText("Name:");
  const eventInput = screen.getByLabelText("Event:");
  const dateInput = screen.getByLabelText("Date:");
  const locationInput = screen.getByLabelText("Location:");
  const tasksInput = screen.getByLabelText("Tasks:");
  const ideasInput = screen.getByLabelText("Ideas, Message, Thoughts:");
  const guestsInput = screen.getByLabelText("Guests:");
  const submitButton = screen.getByRole("button", { name: "Update" });
  await user.type(nameInput, "Pass");
  await user.type(eventInput, "Party");
  await user.type(dateInput, "2023-05-05");
  await user.type(locationInput, "My house");
  await user.type(tasksInput, "Do something fun");
  await user.type(ideasInput, "Ideas for games");
  await user.type(guestsInput, "John, Jane");
  await user.click(submitButton);
  expect(handleUpdateEvents).toHaveBeenCalledWith({
    name: "Pass",
    event: "Party",
    date: "2023-05-05",
    location: "My house",
    tasks: "Do something fun",
    ideas: "Ideas for games",
    guests: "John, Jane",
  });
});
