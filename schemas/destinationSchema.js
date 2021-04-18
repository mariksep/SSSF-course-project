import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    Destinations: [Destination]
    Destination(id: ID!): Destination
  }
  type Destination {
    id: ID
    name: String
    Location: Location
  }
  type Location {
    type: String
    coordinates: [Float]
  }
  input NewLocation {
    coordinates: [Float]
  }
  extend type Mutation {
    addDestination(name: String!, Location: NewLocation): Destination
  }
`;
