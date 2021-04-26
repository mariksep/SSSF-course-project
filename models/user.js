import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
  },
});

export default mongoose.model("User", userModel);
