module.exports = {
  toggleFavouriteFlag: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavouriteFlag(id);
  },
  addNewSession: (parent, {session} , { dataSources }, info) => {
    return dataSources.sessionAPI.addSession(session);
  },
};
