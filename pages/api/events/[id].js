import dbConnect from "../../../db/connect";
import Event from "../../../db/models/Event";

export default async function handler(request, response) {
  try {
    await dbConnect();

    const { id } = request.query;

    if (request.method === "GET") {
      const event = await Event.findById(id);
      if (!event) {
        return response.status(404).json({ status: "Event not found" });
      }
      return response.status(200).json(event);
    }

    if (request.method === "PATCH") {
      await Event.findByIdAndUpdate(id, { $set: request.body });
      return response.status(200).json({ status: `Event ${id} successfully updated` });
    }

    if (request.method === "DELETE") {
      await Event.findByIdAndDelete(id);
      return response.status(200).json({ status: `Event ${id} successfully deleted` });
    }

    return response.status(405).json({ status: "Method not allowed" });
  } catch (error) {
    return response.status(500).json({ status: "Server error" });
  }
}
