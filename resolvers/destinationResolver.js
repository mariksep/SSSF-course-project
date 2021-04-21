import Destination from "../models/destination.js";
import { AuthenticationError } from "apollo-server-express";

export default {
  Query: {
    Destinations: (parent, args) => {
      return Destination.find();
    },
    Destination: (parent, args) => {
      return Destination.findById(args.id);
    },
  },
  Mutation: {
    addDestination: (parent, args, { user }) => {
      console.log("destinationResolver, addDestination", args, user);
      /* if (!user) {
        throw new AuthenticationError("You are not authenticated");
      }*/
      console.log(args);
      const newDestination = new Destination(args);
      console.log(newDestination);
      return newDestination.save();
    },
    modifyDestination: (parent, args) => {
      console.log("destinationResolvers, modifyDestination", args);
      return Destination.findByIdAndUpdate(args.id, args);
    },
    deleteDestination: async (parent, args) => {
      try {
        console.log(args);
        const { id } = args;
        await Destination.findByIdAndDelete(id);
        return id;
      } catch (error) {
        throw new UserInputError(
          `Error while deleting a station: ${error.message}`
        );
      }
    },
  },
};
