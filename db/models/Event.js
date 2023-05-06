import mongoose from "mongoose";

const { Schema } = mongoose;

const eventSchema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: false },
  location: { type: String, required: false },
  event: { type: String, required: true },
  tasks: { type: String, required: false },
  ideas: { type: String, required: false },
  guests: { type: String, required: false },
  budget: { type: Number, required: true },
  food: { type: Number, required: false },
  accomodation: { type: Number, required: false },
  transport: { type: Number, required: false },
  gifts: { type: Number, required: false },
  otherExpenses: { type: Number, required: false },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
