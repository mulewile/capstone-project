import { events } from "../../../resources/events";

export default function handler(request, response) {
  const { id } = request.query;

  const event = events.find((event) => event.id === id);

  if (!event) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(event);
}
