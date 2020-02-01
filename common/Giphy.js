/* © 2019 int3ractive.com
 * Licensed under the MIT license.
 * @author Thanh Tran
 */
'use strict';
const got = require('got');

/**
 * Giphy image object helper
 */
class GiphyImage {
  constructor(rawObj) {
    this.rawObj = rawObj;
  }

  get url() {
    return this.rawObj && this.rawObj.url;
  }
}

/**
 * Giphy json helper
 */
class GiphyResult {
  constructor(rawObj) {
    this.rawObj = rawObj;
  }

  get image() {
    const rawObj = this.rawObj;
    return new GiphyImage(rawObj.data && rawObj.data.images && rawObj.data.images.downsized);
  }
}

// http://giphy.com API key
const TOKEN = 'qdmRdhHXV5Bdj2d9qU1BqDsan74znIKi';

/**
 * Giphy class
 * Wrapping openweather's info object for convenience
 * @param {[type]} weatherInfo [description]
 */
class Giphy {
  constructor() {
    const request = got.extend({
      // please get your own API key
      baseUrl: 'https://api.giphy.com/v1/gifs/',
      // baseUrl: 'http://localhost:3000/mock/giphy.json/',
      headers: {},
      responseType: 'json',
    });
    this.request = request;
  }

  /**
   * Fetch random Gif
   * @param  {string} tag  The tag string to pass to Giphy random API
   * @return {Promise}      Resolved promise
   */
  fetchRandomGif(tag = '') {
    return this.request
      .get(`random?rating=PG-13&api_key=${TOKEN}&tag=${tag}`)
      .then((res) => {
        // console.log('AQI API:', res.body);
        this.rawObj = JSON.parse(res.body);
        console.log('giphy:', this.rawObj.data.url);
        return new GiphyResult(this.rawObj);
      })
      .catch((error) => {
        console.log('Got errors', error);
        this.rawObj = { data: {} };
        return error;
      });
  }

  getCurrentGif() {
    return new GiphyResult(this.rawObj);
  }
}

exports.Giphy = Giphy;
exports.GiphyResult = GiphyResult;
exports.GiphyImage = GiphyImage;
