import Attraction from "../models/attraction.js";
import { AuthenticationError } from "apollo-server-express";
import { UserInputError } from "apollo-server-errors";

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
    addAttraction: async (parent, args, { user }) => {
      let newAttraction;
      try {
        console.log("destinationResolver, addDestination", args, user);
        if (!user) {
          throw new AuthenticationError("You are not authenticated");
        }
        console.log(args);
        newAttraction = new Attraction(args);
        console.log(newAttraction);
      } catch (error) {
        throw new UserInputError(
          `Error while adding a new Attraction: ${error.message}`
        );
      }
      return newAttraction.save();
    },
    modifyAttraction: async (parent, args, { user }) => {
      try {
        if (!user) {
          throw new AuthenticationError("You are not authenticated");
        }
        console.log("attractionResolver, modifyAttraction", args);
        await Attraction.findByIdAndUpdate(args.id, args);
      } catch (error) {
        throw new UserInputError(
          `Error while adding a modify attraction: ${error.message}`
        );
      }
      return args;
    },
    deleteAttraction: async (parent, args, { user }) => {
      try {
        if (!user) {
          throw new AuthenticationError("You are not authenticated");
        }
        console.log(args);
        const { id } = args;
        await Attraction.findByIdAndDelete(id);
        return id;
      } catch (error) {
        throw new UserInputError(
          `Error while deleting a attraction: ${error.message}`
        );
      }
    },
  },
};
