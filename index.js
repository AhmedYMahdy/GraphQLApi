const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");
const typeDefs =require("./schema.js")
const resolvers = require("./resolvers.js")

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});

const server = new ApolloServer({ typeDefs, resolvers, dataSources});  // we can add --introspection: false-- to hide the schema

server.listen({ port: process.env.port || 4000 }).then(({ url }) => {
  console.log(`graphQl running at ${url}`);
});
