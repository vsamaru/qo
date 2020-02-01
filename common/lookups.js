const uvIndexRanges = [
  {
    risk: 'low',
    min: 0,
    max: 2.9,
    color: 'Green',
    description: "low danger from the sun's UV rays for the average person.",
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'moderate',
    min: 3.0,
    max: 5.9,
    color: 'Yellow',
    description: 'moderate risk of harm from unprotected sun exposure.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'high',
    min: 6.0,
    max: 7.9,
    color: 'Orange',
    description: 'high risk of harm from unprotected sun exposure. Protection against skin and eye damage is needed.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'very high',
    min: 8.0,
    max: 10.9,
    color: 'Red',
    description:
      'very high risk of harm from unprotected sun exposure. Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
  {
    risk: 'extreme',
    min: 11.0,
    max: 20,
    color: 'Violet',
    description:
      'extreme risk of harm from unprotected sun exposure. Take all precautions because unprotected skin and eyes can burn in minutes.',
    helpLink: 'https://en.wikipedia.org/wiki/Ultraviolet_index#Index_usage',
  },
];

function getUVIndexRange(uvIndex) {
  return uvIndexRanges.find((range) => range.max > uvIndex);
}

module.exports.getUVIndexRange = getUVIndexRange;

const aqiRanges = [
  {
    min: 0,
    max: 50,
    risk: 'Good',
    description: 'Air quality is considered satisfactory, and air pollution poses little or no risk.',
    helpLink: 'http://aqicn.org/scale/',
  },
  {
    min: 51,
    max: 100,
    risk: 'Moderate',
    description:
      'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
    helpLink: 'http://aqicn.org/scale/',
  },
  {
    min: 101,
    max: 150,
    risk: 'Unhealthy for Sensitive Groups',
    description:
      'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
    helpLink: 'http://aqicn.org/scale/',
  },
  {
    min: 151,
    max: 200,
    risk: 'Unhealthy',
    description:
      'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.',
    helpLink: 'http://aqicn.org/scale/',
  },
  {
    min: 201,
    max: 300,
    risk: 'Very Unhealthy',
    description:
      'Health warnings of emergency conditions. The entire population is more likely to be affected. Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.',
    helpLink: 'http://aqicn.org/scale/',
  },
  {
    min: 300,
    max: 1000,
    risk: 'Hazardous',
    description:
      'Health alert: everyone may experience more serious health effects. Everyone should avoid all outdoor exertion.',
    helpLink: 'http://aqicn.org/scale/',
  },
];

function getAQIRange(aqi) {
  return aqiRanges.find((range) => range.max > aqi);
}

module.exports.getAQIRange = getAQIRange;
