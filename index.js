// const { TGp, iQ, k } = require('./TWO')
const { TGp } = require('./tg')
const { iQ } = require('./src')

const { k } = require('./%')
const { ViberClient } = require('messaging-api-viber')
const AUTH_TOKEN = '4b043e930d67de4a-8eda62ea3501f400-151aec6a0c5e56fc';
const client = ViberClient.connect(AUTH_TOKEN)
//const request = require('request-promise')
const express = require("express")
const app = express()
// const bodyParser = require('body-parser')
const port = 5000
// app.use(bodyParser.json())
app.post("/", (req, res) => {
    var upd = req.body || {}
    console.log(upd)
    if (upd.hasOwnProperty("timestamp")) {
        var txt = 0
       
        var from = upd.sender || upd.user || ''
        var USER_ID = from.id || upd.user_id || ''
        var name = from.name || upd.name || ''
        var msg = upd.message || ''
        if (msg) {
            txt = msg.text || 0
        }
        txt = txt < 2 ? Math.abs(txt) : txt > 1 ? 0 : 0
       client.sendMessage(USER_ID, {
  type: 'text',
  text: 'Hello',
})
    }
    if (upd.hasOwnProperty("update_id")) {
        if (upd.hasOwnProperty("inline_query")) {
            iQ(req, res)
        }
        if (upd.hasOwnProperty("photo")) {
            TGp(req)
        }

      
        
        
        res.json(
            {
                method: 'sendMessage',
                chat_id: 'chat',
                text: 'Y'
            }
        )
    }
})

app.post("/user", (req, res) => {
    const { name, location } = req.body
    res.send({ status: "User created", name, location })
})
app.get("/users", (req, res) => {
    res.json([
        { name: "William", location: "Abu Dhabi" },
        { name: "Chris", location: "Vegas" }
    ])
})
app.get("/", (req, res) => {
    var Y = {}
    Y.$ = '❓'
    Y.ref = '[cf]'
    res.json(
        {
            method: '[GET]',
            chat_id: 528494103,
            text: Y
        })
})
app.listen(port, () => {
    console.log(`Server is booming on port 5000
Visit http://localhost:5000`)
})
