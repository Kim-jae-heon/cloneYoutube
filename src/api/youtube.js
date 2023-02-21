export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keywords) {
    return keywords ? this.#searchByKeyword(keywords) : this.#mostPopular();
  }

  async channelImgURL(id) {
    return this.apiClient
      .channels({ params: { part: 'snippet', id } })
      .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        relatedToVideoId: id,
      }
    })
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }
  async #searchByKeyword(keywords) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        q: keywords,
        type: 'video',
      }
    })
      .then(res => res.data.items)
      .then(items => items.map(item => ({ ...item, id: item.id.videoId })));
  }

  async #mostPopular() {
    return this.apiClient.videos({
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'US',
      }
    })
      .then(res => res.data.items);
  }
}