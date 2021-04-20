import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    Attractions: [Attraction]
    Attraction(id: ID!): Attraction
  }
  type Attraction {
    id: ID
    destinationID: ID
    name: String
    type: String
    AttractionLocation: AttractionLocation
  }
  type AttractionLocation {
    type: String
    coordinates: [Float]
  }
  input NewAttractionLocation {
    coordinates: [Float]
  }
  extend type Mutation {
    addAttraction(
      name: String!
      type: String
      destinationID: ID!
      AttractionLocation: NewAttractionLocation
    ): Attraction
    modifyAttraction(
      id: ID!
      type: String
      name: String
      AttractionLocation: NewAttractionLocation
    ): Attraction
  }
`;
