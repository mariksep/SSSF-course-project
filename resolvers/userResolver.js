import User from "../models/user.js";
import { AuthenticationError, UserInputError } from "apollo-server-errors";
import { login } from "../passport/authenticate.js";
import bcrypt from "bcrypt";

export default {
  Query: {
    login: async (_, args, context) => {
      const { req, res } = context;
      console.log(req.body);
      try {
        req.body = args;
        const authResponse = await login(req, res);
        console.log("authresp", authResponse);
        return {
          id: authResponse.user._id,
          username: authResponse.user.username,
          token: authResponse.token,
        };
      } catch (error) {
        throw new AuthenticationError(error.message);
      }
    },
  },
  Mutation: {
    register: async (parent, args, context) => {
      const { req, res } = context;
      req.body = args;
      try {
        console.log("rgister", args);
        const hashedPassword = await bcrypt.hash(args.password, 12);
        const userWithHash = {
          ...args,
          password: hashedPassword,
        };
        const newUser = new User(userWithHash);
        const result = await newUser.save();
        const authResponse = await login(req, res);
        return {
          id: authResponse.user._id,
          username: authResponse.user.username,
          token: authResponse.token,
        };
      } catch (error) {
        throw new UserInputError(
          `Error while creating an account: ${error.message}`
        );
      }
    },
  },
};
