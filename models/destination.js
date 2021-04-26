import mongoose from "mongoose";

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: String,
  DestinationLocation: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Attraction: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attraction",
  },
});

export default mongoose.model("Destination", destinationSchema);
