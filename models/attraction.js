import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attractionSchema = new Schema({
  destinationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
  },
  type: String,
  name: String,
  AttractionLocation: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
});

export default mongoose.model("Attraction", attractionSchema);
