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
  eventBudget: { type: Number, required: false },
  foodCosts: { type: Number, required: false },
  accomodationCosts: { type: Number, required: false },
  transportCosts: { type: Number, required: false },
  giftCosts: { type: Number, required: false },
  otherEventExpenses: { type: Number, required: false },
  eventLikeStatus: { type: Boolean, required: false },
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
