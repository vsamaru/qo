const createApp = require('../common/createApp')

const app = createApp()

app.get('/api/*', (req, res) => {
    console.log(req.body)
  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      response: '[GET] Hi. This is Lazuli chat bot landing service.',
    },
  })
})

app.post('/api/*', (req, res) => {
    console.log(req.body)
  res.json({
    success: true,
    errorCode: '200',
    errorMsg: '',
    fields: {
      response: '[POST] Hi. This is Lazuli chat bot landing service.',
    },
  })
})

module.exports = app
