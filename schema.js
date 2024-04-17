const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: Room
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: String): Speaker
  }
  enum Room {
    Europa
    sol
    Saturn
  }

  type Mutation {
    toggleFavouriteFlag(id: ID): Session
    addNewSession(session: SessionInput): Session
  }

  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }

  type Session {
    id: ID!
    title: String!
    name: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Too Many fooos")
    level: String
    favourite: Boolean
    speakers: [Speaker]
  }

  input SessionInput {
    title: String!
    name: String
    description: String
    startsAt: String
    endsAt: String
    room: String
    day: String
    format: String
    level: String
    favourite: Boolean
  }
`;
