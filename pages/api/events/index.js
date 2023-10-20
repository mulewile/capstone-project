import dbConnect from "../../../db/connect";
import Event from "../../../db/models/Event";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const events = await Event.find();
      response.status(200).json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      response.status(500).json({ error: "Failed to fetch events." });
    }
  }

  if (request.method === "POST") {
    try {
      const eventData = request.body;
      const event = await Event.create(eventData);
      response.status(201).json({ status: "Event created", event });
    } catch (error) {
      console.error("Error creating event:", error);
      response.status(400).json({ error: "Failed to create event." });
    }
  }
}
