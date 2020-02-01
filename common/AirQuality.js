/* © 2019 int3ractive.com
 * Licensed under the MIT license.
 * @author Thanh Tran
 */
'use strict';
const got = require('got');
const { utcToZonedTime } = require('date-fns-tz');

/**
 * Getting condition helper
 */
class AQIInfo {
  constructor(rawObj) {
    this.rawObj = rawObj;
    this._time = utcToZonedTime(new Date(rawObj.time.s), rawObj.time.tz);
    // console.log('time', this._time, typeof this._time);
  }

  get time() {
    return this._time;
  }

  get aqi() {
    return this.rawObj.aqi;
  }

  get station() {
    const rawObj = this.rawObj;
    return rawObj.city && rawObj.city.name;
  }
}

// http://aqicn.org token
const TOKEN = '9a7b5159d27b748c6c24449560afa6d241bc6921';

/**
 * AirQuality class
 * Wrapping openweather's info object for convenience
 * @param {[type]} weatherInfo [description]
 */
class AirQuality {
  constructor() {
    const request = got.extend({
      // please get your own API key at darksky
      baseUrl: 'http://api.waqi.info/',
      // baseUrl: 'http://localhost:3000/mock/aqi.json/',
      headers: {},
      responseType: 'json',
    });
    this.request = request;
  }

  /**
   * Fetch weather forcast API for [lat, lng] location default to Ho Chi Minh city
   * @param  {Number} lat  [description]
   * @param  {Number} long [description]
   * @return {Promise}      Resolved promise
   */
  fetchAQI(/*lat = 10.7726247, lng = 106.7018555*/) {
    // TODO: search for station and then retrieve station ID
    return this.request
      .get(`feed/@8767/?token=${TOKEN}`)
      .then((res) => {
        // console.log('AQI API:', res.body);
        this.rawObj = JSON.parse(res.body);
        console.log('AQI API:', this.rawObj.data.aqi);
        return this.rawObj;
      })
      .catch((error) => {
        console.log('Got errors', error);
        this.rawObj = { data: {} };
        return error;
      });
  }

  getCurrentCondition() {
    return new AQIInfo(this.rawObj.data);
  }
}

exports.AirQuality = AirQuality;
exports.AQIInfo = AQIInfo;
