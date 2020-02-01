/* © 2019 int3ractive.com
 * Licensed under the MIT license.
 * @author Thanh Tran
 */
'use strict';
const got = require('got');
const { utcToZonedTime } = require('date-fns-tz');

// prettier-ignore
const ICONS = {
  'default': '🌤',
  'clear-day': '☀️',
  'clear-night': '🌙',
  'rain': '⛈',
  'snow': '🌨',
  'sleet': '🌨',
  'wind': '💨',
  'fog': '🌫',
  'cloudy': '☁️',
  'partly-cloudy-day': '🌤',
  'partly-cloudy-night': '🌙☁️',
  'thunderstorm': '⛈',
  'hail': '🌧🤕',
  'tornado': '🌪'
}

/**
 * Getting condition helper
 */
class Condition {
  constructor(rawObj, timezone) {
    this.rawObj = rawObj;
    this._time = utcToZonedTime(new Date(rawObj.time * 1000), timezone);
  }

  get time() {
    return this._time;
  }

  /**
   * Temperature in Degree Celsius
   * @return {Number} [description]
   */
  get temperature() {
    return this.rawObj.temperature;
  }

  /**
   * Feel-like temperatue in Degree Celsius
   * @return {Number} [description]
   */
  get feelLikeTemperature() {
    return this.rawObj.apparentTemperature;
  }

  /**
   * Humidity in fragment value
   * @return {Number} [description]
   */
  get humidity() {
    return this.rawObj.humidity;
  }

  /**
   * Weather description
   * @return {String} [description]
   */
  get mainCondition() {
    return this.rawObj.summary;
  }

  /**
   * Wind speed at km/h
   * @return {Number} [description]
   */
  get windSpeed() {
    return this.rawObj.windSpeed;
  }

  get uvIndex() {
    return this.rawObj.uvIndex;
  }

  get iconEmoji() {
    return ICONS[this.rawObj.icon] || ICONS.default;
  }

  get icon() {
    return this.rawObj.icon;
  }
}

/**
 * Weather class
 * Wrapping openweather's info object for convenience
 * @param {[type]} weatherInfo [description]
 */
class Weather {
  constructor() {
    const request = got.extend({
      // please get your own API key at darksky
      baseUrl: 'https://api.darksky.net/forecast/d1b0e276a05e2bb58c3bf0fe3dc06475',
      // baseUrl: 'http://localhost:3000/mock/weather.json/',
      headers: {},
      responseType: 'json',
    });
    this.request = request;
  }

  /**
   * Get weather forcast for [lat, lng] location default to Ho Chi Minh city
   * @param  {Number} lat  [description]
   * @param  {Number} long [description]
   * @return {Promise}      Resolved promise
   */
  fetchWeatherForecast(lat = 10.7726247, lng = 106.7018555) {
    return this.request
      .get(`${lat},${lng}?units=ca`)
      .then((res) => {
        this.rawObj = JSON.parse(res.body);
        console.log('weather API:', this.rawObj.timezone);
        return this.rawObj;
      })
      .catch((error) => {
        console.log('Got errors', error);
        this.rawObj = {};
        return error;
      });
  }

  getCurrentCondition() {
    return new Condition(this.rawObj.currently, this.rawObj.timezone);
  }

  getNextHourCondition() {
    if (!this.rawObj.hourly || !this.rawObj.hourly.data) {
      return new Error('No hourly condition');
    }

    const now = Date.now() / 1000; // convert to Unix time, in seconds

    const data = this.rawObj.hourly.data;
    const nextHours = data.filter((hour) => {
      // console.log('hourly vs now', hour.time, now + 30 * 60);
      return hour.time > now + 30 * 60;
    });

    if (nextHours[0]) {
      return new Condition(nextHours[0], this.rawObj.timezone);
    }

    return new Error('No next hour condition for today');
  }
}

exports.Weather = Weather;
exports.Condition = Condition;
exports.ICONS = ICONS;
