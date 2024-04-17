const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions-datasource.js");
const SpeakersAPI = require("./datasources/speakers-datasource.js");
const typeDefs =require("./schema.js")
const resolvers = require("./resolvers.js");

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI : new SpeakersAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources});  // we can add --introspection: false-- to hide the schema

server.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log(`graphQl running at ${url}`);
});
