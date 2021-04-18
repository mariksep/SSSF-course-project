import mongoose from "mongoose";

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  name: String,
  Location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  /*Attractions: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Attractions",
  },*/
});

export default mongoose.model("Destination", destinationSchema);
