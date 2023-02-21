import axios from 'axios';

export default class FakeYoutube {
  async search(keywords) {
    return keywords ? this.#searchByKeyword() : this.#mostPopular();
  }

  async channelImgURL(id) {
    return axios
      .get(`/videos/channel.json`)
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return axios
      .get(`/videos/related.json`)
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return axios
      .get(`/videos/popular.json`)
      .then(res => res.data.items);
  }
}