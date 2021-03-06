import { gql } from "apollo-server-core";

export default gql`
  type User {
    username: String!
    id: ID!
    token: String
    Destinations: [Destination]
  }
  extend type Query {
    user(id: ID!): User
    login(username: String!, password: String!): User
  }
  extend type Mutation {
    register(username: String!, password: String!): User
  }
`;
