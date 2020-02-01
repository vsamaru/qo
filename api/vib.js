/* ©
 * @
 *
 */
const bodyParser = require('body-parser')
const createApp = require('../common/createApp')
const app = createApp()
const port = 5000
app.use(bodyParser.json())
app.get('/api/*', (req) => {
  
      return {
        success: true,
        errorCode: '200'
        
      } 
    })
    .catch((error) => {
    //   console.error(error);
      res.send(error)
    })
    
exports.APP = app
