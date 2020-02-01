/* ©
 * @
 *
 */

const createApp = require('../common/createApp');

const { Weather } = require('../common/Weather');
const { getUVIndexRange } = require('../common/lookups');

const app = createApp();

app.get('/api/*', (req, res) => {
  // res.end('weather end point');
  const weather = new Weather();
  const { ViberClient } = require('messaging-api-viber')
  const authToken = '4ae0a46a32e7de59-8008f09131f0c458-73e057ff3f0dcbcb'
  const client = ViberClient.connect(authToken)
  const USER_ID = 'uO2Qoyrzuxkzsp3aJAR7BA=='
  client.sendMessage(USER_ID, {
    type: 'text',
    text: 'req.body',
    })
    console.log(req.body)
  weather
    .fetchWeatherForecast()
    .then(() => {
      const condition = weather.getCurrentCondition();
      const nextHourCondition = weather.getNextHourCondition();

      res.json({
        success: true,
        errorCode: '200',
        errorMsg: '',
        fields: {
          response: composeResponse(condition, nextHourCondition),
          cTime: condition.time,
          cTemperature: condition.temperature,
          cFeelLikeTemperature: condition.feelLikeTemperature,
          cHumidity: condition.humidity,
          cMainCondition: condition.mainCondition,
          cWindSpeed: condition.windSpeed,
          cUvIndex: condition.uvIndex,
          cIcon: condition.icon,
          nTime: nextHourCondition.time,
          nTemperature: nextHourCondition.temperature,
          nFeelLikeTemperature: nextHourCondition.feelLikeTemperature,
          nHumidity: nextHourCondition.humidity,
          nMainCondition: nextHourCondition.mainCondition,
          nWindSpeed: nextHourCondition.windSpeed,
          nUvIndex: nextHourCondition.uvIndex,
          nIcon: nextHourCondition.icon,
        },
      });
    })
    .catch((error) => {
      console.log('Weather.fetchWeatherForecast ERROR', error);
      res.send(error);
    });
});

// let's build the response here
function composeResponse(current, nextHour) {
  let response = `Current weather condition is **${current.mainCondition}** ${current.iconEmoji},`;
  response += ` outside temperature is **${Math.round(current.temperature)}°C**,`;
  response += ` feel like **${Math.round(current.feelLikeTemperature)}°C**.`;

  const currentUVIndexInfo = getUVIndexRange(current.uvIndex);
  if (current.uvIndex >= 6 && currentUVIndexInfo) {
    response += ` Current UV index is **${current.uvIndex}** [(${currentUVIndexInfo.risk})](${
      currentUVIndexInfo.helpLink
    }).`;
  }

  response += '\n\n'; // new paragraph

  const nextHourUVIndexInfo = getUVIndexRange(nextHour.uvIndex);
  response += ` Next hour (${nextHour.time.getHours()}:00) condition is **${nextHour.mainCondition}** ${
    nextHour.iconEmoji
  },`;
  response += ` with temperature of **${Math.round(nextHour.temperature)}°C**`;
  if (nextHour.uvIndex >= 6) {
    response += `, UV index of **${nextHour.uvIndex}** [(${nextHourUVIndexInfo.risk})](${
      nextHourUVIndexInfo.helpLink
    })`;
  }
  response += '.\n\n'; // new paragraph

  if (['rain', 'snow', 'sleet', 'thunderstorm'].includes(nextHour.icon)) {
    response += ` There is a **${nextHour.icon}** coming. Please take ☂️ with you when going outside.`;
  }

  return response;
}

module.exports = app;
