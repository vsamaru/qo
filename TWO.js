const PO = require('./po.json')
const { uploadByUrl } = require('telegraph-uploader')
const md = require('telegraph.md')
const telegraph = require('telegraph-node')
const request = require('request-promise')
const ph = new telegraph()
var RE = 0
exports.UPL = (url) => {
    uploadByUrl(url)
        .then((result) => {
            return result.link
        })
}

var str1 = "#$\n## h2 Heading\n> Blockquotes can also be\n\nsome text \n![Minion](https://octodex.github.com/images/minion.png)\n1.list item\n2.bold *list*\n- other list item\n  another list item\n\n[link with title](http://nodeca.github.io/pica/demo/)\nsome `Inline code` as final "
var TOKEN = '959c2174fe59434fa0ca6049a4db1265c0a073367ad36fe323e58c934004'
var ABC = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var RND = '-' + ABC[Math.floor(Math.random() * 25)] + ABC[Math.floor(Math.random() * 25)] + ABC[Math.floor(Math.random() * 25)] + '-'
function TO(str, user) {
    var nodes = md(str)
    ph.createPage(TOKEN, user + RND, nodes).then(result => { 
        console.info(result.url)
    return result.url  
    })
} 

    var Tstr = 
`
# ${'H1'}
## ${'H1'}
> ${'H1'}\n
some text\n
![Minion](https://octodex.github.com/images/minion.png)\n
1.list item
2.bold *list*
- other list item
  another list item
[link with title](http://nodeca.github.io/pica/demo/)
some  as final
`

    exports.TOGAS = (toGAS) => {
        var url = `https://script.google.com/macros/s/AKfycbxbNZV5ULYGyb8oNSWDN9JqkgVZ0R3561rxaxt-59y1Bwi6ssql/exec?${toGAS}`
    var retstr = request(url, { resolveWithFullResponse: true }).then(
        response => {
            if (response.statusCode === 200) {
console.info(response.body)
                return response.body
            }

        })
} 


/*
var Tstr = 
`
# ${'H1'}
## ${'H1'}
> ${'H1'}
some text
![Minion](https://octodex.github.com/images/minion.png)
1.list item
2.bold *list*
- other list item
  another list item
[link with title](http://nodeca.github.io/pica/demo/)
some  as final
`
 */