const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL='http://localhost:3000/speakers'
  }
  
  async getSpeakers(args) {
    return await this.get('/');
  }
  async getSpeakerById(id) {
    return await this.get(`/${id}`);
  }
}

module.exports= SpeakersAPI;