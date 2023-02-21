import axios from 'axios';

export default class FakeYoutubeClient {
  async channels() {
    return axios.get('/videos/channel.json');
  }

  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get('/videos/related.json')
      : axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }
}