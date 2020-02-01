const { TGp, iQ, k } = require('./TWO')
const { ViberClient } = require('messaging-api-viber')
const AUTH_TOKEN = '4ae0a46a32e7de59-8008f09131f0c458-73e057ff3f0dcbcb';
const client = ViberClient.connect(AUTH_TOKEN)
const request = require('request-promise')
const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.json())
app.post("/", (req, res) => {
    var Y = req.body
    console.log(JSON.stringify(Y, null, 1))
    if (Y.hasOwnProperty("timestamp")) {
        var txt = 0
        const upd = Y
        var from = upd.sender || upd.user || ''
        var USER_ID = from.id || upd.user_id || ''
        var name = from.name || upd.name || ''
        var msg = upd.message || ''
        if (Y.message) {
            txt = Y.message.text || 0
        }
        txt = txt < 2 ? Math.abs(txt) : txt > 1 ? 0 : 0
        client.sendCarouselContent(USER_ID, k[txt])
    }
    if (Y.hasOwnProperty("update_id")) {
        if (Y.hasOwnProperty("inline_query")) {
            iQ(req, res)
        }
        if (Y.hasOwnProperty("photo")) {
            TGp(req)
        }

        Y.$ = '❓'
        Y.ref = '[cf]'
        var chat = Y.message.from.id
        var Y1 = [Y, chat]
        var Y$ = JSON.stringify(Y1, null, 4)
        console.log(Y$)
        res.json(
            {
                method: 'sendMessage',
                chat_id: chat,
                text: Y$
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
