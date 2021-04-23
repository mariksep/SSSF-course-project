import destinationSchema from "./destinationSchema.js";
import attractionSchema from "./attractionSchema.js";
import userSchema from "./userSchema.js";

import { gql } from "apollo-server-express";

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, destinationSchema, attractionSchema, userSchema];
