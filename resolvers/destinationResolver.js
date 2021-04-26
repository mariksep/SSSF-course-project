import Destination from "../models/destination.js";
import { AuthenticationError } from "apollo-server-express";
import { UserInputError } from "apollo-server-errors";

export default {
  User: {
    Destinations: async (parent, args) => {
      console.log(parent);
      return await Destination.find({ userID: parent._id });
    },
  },
  Query: {
    Destinations: (parent, args) => {
      return Destination.find();
    },
    Destination: (parent, args) => {
      return Destination.findById(args.id);
    },
  },
  Mutation: {
    addDestination: async (parent, args, { user }) => {
      let newDestination;
      try {
        console.log("destinationResolver, addDestination", args, user);
        if (!user) {
          throw new AuthenticationError("You are not authenticated");
        }
        console.log(args);
        newDestination = await new Destination(args);
        console.log(newDestination);
      } catch (error) {
        throw new UserInputError(
          `Error while adding a new destination: ${error.message}`
        );
      }
      return await newDestination.save();
    },
    modifyDestination: async (parent, args, { user }) => {
      try {
        if (!user) {
          throw new AuthenticationError("You are not authenticated");
        }
        console.log("destinationResolvers, modifyDestination", args);
        return Destination.findByIdAndUpdate(args.id, args);
      } catch (error) {
        throw new UserInputError(
          `Error while adding a modify destination: ${error.message}`
        );
      }
    },
    deleteDestination: async (parent, args, { user }) => {
      try {
        if (!user) {
          throw new AuthenticationError("You are not authenticated");
        }
        console.log(args);
        const { id } = args;
        await Destination.findByIdAndDelete(id);
        return id;
      } catch (error) {
        throw new UserInputError(
          `Error while deleting a destination: ${error.message}`
        );
      }
    },
  },
};
