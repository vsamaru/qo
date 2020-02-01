/* © 2019 int3ractive.com
 * @author Thanh Tran
 */
const createApp = require('../common/createApp');
const { Giphy } = require('../common/Giphy');
const app = createApp();

app.get('/api/*', (req, res) => {
  let tag = req.query.tag || '';

  // remove initial me or gif text
  tag = tag.replace(/^(me|gif)/i, '');

  const giphy = new Giphy();

  giphy
    .fetchRandomGif(tag)
    .then((result) => {
      res.json({
        success: true,
        errorCode: '200',
        errorMsg: '',
        fields: {
          response: `![${tag}](${result.image.url})`,
        },
      });
    })
    .catch((err) => {
      res.json({
        success: false,
        errorCode: '500',
        errorMsg: '',
        fields: {
          response: `Some error at Giphy API. Info: ${err.message}`,
        },
      });
    });
});

module.exports = app;
