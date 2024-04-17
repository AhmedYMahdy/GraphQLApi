module.exports = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.speakerAPI.getSpeakers();
    return speakers.filter((speaker) =>
      session.speakers.some((sspeaker) => sspeaker.id === speaker.id)
    );
    //Another Way to Filter
    // return speakers.filter((speaker) => {
    //   return _filter.filter(session.speaker, { id: speaker.id }).lenght > 0;
    // });
  },
};
