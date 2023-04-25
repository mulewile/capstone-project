import { events } from "../../../resources/events";

export default function handler(request, response) {
  return response.status(200).json(events);
}
