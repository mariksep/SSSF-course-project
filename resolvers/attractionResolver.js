import Attraction from "../models/attraction.js";
import { AuthenticationError } from "apollo-server-express";

export default {
  Destination: {
    Attractions: async (parent, args) => {
      console.log(parent);
      return await Attraction.find({ destinationID: parent._id });
    },
  },
  Query: {
    Attractions: (parent, args) => {
      return Attraction.find();
    },
    Attraction: (parent, args) => {
      return Attraction.findById(args.id);
    },
  },
  Mutation: {
    addAttraction: (parent, args, { user }) => {
      console.log("destinationResolver, addDestination", args, user);
      /* if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }*/
      console.log(args);
      const newAttraction = new Attraction(args);
      console.log(newAttraction);
      return newAttraction.save();
    },
    modifyAttraction: (parent, args) => {
      console.log("attractionResolver, modifyAttraction", args);
      return Attraction.findByIdAndUpdate(args.id, args);
    },
  },
};
