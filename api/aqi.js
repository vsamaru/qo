/* © 2019 int3ractive.com
 * @author Thanh Tran
 */
const createApp = require('../common/createApp');

const { AirQuality } = require('../common/AirQuality');
const { getAQIRange } = require('../common/lookups');

const app = createApp();

app.get('/api/*', (req, res) => {
  const aqi = new AirQuality();

  aqi
    .fetchAQI()
    .then((/*rawObj*/) => {
      const condition = aqi.getCurrentCondition();

      res.json({
        success: true,
        errorCode: '200',
        errorMsg: '',
        fields: {
          response: composeResponse(condition),
        },
      });
    })
    .catch((error) => {
      console.log('Weather.getWeatherForecast ERROR', error);
      res.send(error);
    });
});

function composeResponse(current) {
  const aqiRange = getAQIRange(current.aqi);
  let response = `Currently, **Air Quality Index** at ${current.station} is **${
    current.aqi
  }**, with pollution level [**${aqiRange.risk}**](${aqiRange.helpLink}). Meaning: *${aqiRange.description}.*`;

  response = response.replace('..', '.');

  return response;
}

module.exports = app;
