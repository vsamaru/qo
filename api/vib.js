/* ©
 * @
 *
 */
const bodyParser = require('body-parser')
const createApp = require('../common/createApp')
const app = createApp();
const { ViberClient } = require('messaging-api-viber')
const authToken = '4ae0a46a32e7de59-8008f09131f0c458-73e057ff3f0dcbcb'
const client = ViberClient.connect(authToken)
const USER_ID = 'uO2Qoyrzuxkzsp3aJAR7BA=='

app.get('/api/*', (req, res) => {
  

 
  client.sendMessage(USER_ID, {
    type: 'text',
    text: 'req.body',
    })
    console.log(req.body)
 

      res.json({
        success: true,
        errorCode: '200'
    })
    .catch((error) => {
      console.log('Weather.fetchWeatherForecast ERROR', error);
      res.send(error);
    })
})

module.exports = app;
