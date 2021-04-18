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
    /*
    modifyAnimal: (parent, args) => {
      console.log("animalResolver, modifyAnimal", args);
      return Animal.findByIdAndUpdate(args.id, args);
    },*/
  },
};
