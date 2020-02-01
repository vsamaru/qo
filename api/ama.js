/* © 2019 int3ractive.com
 * @author Thanh Tran
 *
 * Ask me anything, using WolframAlpha API
 */
const createApp = require('../common/createApp');
const WolframAlphaAPI = require('../vendor/WolframAlphaAPI');

const waApi = WolframAlphaAPI('VARV76-79TLP732H7');
const app = createApp();

app.get('/api/*', (req, res) => {
  let q = req.query['sys.userInput'] || req.query.q || '';

  if (!q) {
    return res.json({
      success: true,
      errorCode: '200',
      errorMsg: '',
      fields: {
        response: 'Sorry. No question detected.',
      },
    });
  }

  waApi
    .getSpoken(q)
    .then((answer) => {
      res.json({
        success: true,
        errorCode: '200',
        errorMsg: '',
        fields: {
          response: answer,
        },
      });
    })
    .catch((/*error*/) => {
      res.json({
        success: true,
        errorCode: '200',
        errorMsg: '',
        fields: {
          response: "Sorry. I don't know how to answer this question",
        },
      });
    });
});

module.exports = app;
