const sessions = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const filter = require('lodash');

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions(args) {
    return filter.filter(sessions, args);
  }
  getSessionById(id) {
    return sessions.filter((session) => session.id === parseInt(id))[0];
    // return filter.filter(sessions,{id : parseInt(id) } )[0];      ########### Another way
  }
}
module.exports = SessionAPI;
