import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    Destinations: [Destination]
    Destination(id: ID!): Destination
    specifyDestinations(id: ID!): [Destination]
  }
  type Destination {
    id: ID
    userID: ID
    name: String
    DestinationLocation: DestinationLocation
    Attractions: [Attraction]
  }
  type DestinationLocation {
    type: String
    coordinates: [Float]
  }
  input NewDestinationLocation {
    coordinates: [Float]
  }
  extend type Mutation {
    addDestination(
      name: String!
      userID: ID!
      DestinationLocation: NewDestinationLocation
    ): Destination
    modifyDestination(
      id: ID!
      name: String
      DestinationLocation: NewDestinationLocation
    ): Destination
    deleteDestination(id: ID!): Destination
  }
`;
