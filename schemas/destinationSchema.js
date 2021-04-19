import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    Destinations: [Destination]
    Destination(id: ID!): Destination
  }
  type Destination {
    id: ID
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
      DestinationLocation: NewDestinationLocation
    ): Destination
  }
`;
