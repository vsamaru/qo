/* © 2019 int3ractive.com
 * @author Thanh Tran
 *
 * Express boilerplate for each endpoints
 */
const express = require('express');
const helmet = require('helmet');

function createApp() {
  const app = express();

  app.use(helmet()); // security header
  app.use(express.json()); // alternative to body-parser middleware
  app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log(req.body)
  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      response: 'Hi. This is Lazuli chat bot landing service.',
    },
  })
})

app.post('/', (req, res) => {
    console.log(req.body)
  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      response: 'Hi. This is Lazuli chat bot landing service.',
    },
  })
})
  // error handler
  // app.use(function(err, req, res) {
  //   // render the error page
  //   res.status(err.status || 500);
  //   res.end(`<h2>SERVER ERROR</h2><p>${err.message}`);
  // });
  //
  return app;
}

module.exports = createApp;
