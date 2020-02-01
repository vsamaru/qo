/* ©
 * @
 *
 */
const createApp = require('../common/createApp');
const { getRandomItem } = require('../common/utils');

const app = createApp();

app.get('/api/*', (req, res) => {
  const optionsText = req.body.options;
  console.log(req.body);

  if (!optionsText) {
    return res.json({
      success: true,
      errorCode: '200',
      errorMsg: '',
      fields: {
        result: 'Sorry, no option to choose.',
      },
    });
  }

  const options = optionsText.split(',');
  const result = String(getRandomItem(options))
    .replace(/[?:]/g, '')
    .trim();

  console.log('random result', result);
  if (result) {
    return res.json({
      success: true,
      errorCode: '200',
      errorMsg: '',
      fields: {
        result: result.replace(/[?:]/g, ''),
      },
    });
  }

  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      result: 'Sorry. No option to answer.',
    },
  });
});

module.exports = app;
