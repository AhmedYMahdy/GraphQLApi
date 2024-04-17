const Mutation = require("./resolvers/mutation-resolver");
const Query = require("./resolvers/query-resolver");
const Session = require("./resolvers/session-resolver");

module.exports = {
  Query,
  Session,
  Mutation
};
