const PO = require('./pokemon.json')
const { uploadByUrl } = require('telegraph-uploader')
const md = require('telegraph.md')
const telegraph = require('telegraph-node')
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
exports.TOPH = (str, user) => {
    var str1 = 
`
# ${'H1'}
## ${'H1'}
> ${'H1'}
some text\n
![Minion](https://dl-media.viber.com/5/media/2/short/any/sig/image/0x0/e473/0e15feec55a4e3a8f6af496219492f5ced8a28b93c52d2e2b4ed773fb0bce473.jpg?Expires=1580308306&Signature=p97sHSLljvpjdoCocecortjWUqsRc8oHJLISp2svs6mzdk4npl4PsjnTcY5fxL0NzFLWVCICO9~5T-vfRcQ57dImoZF~nJb-c2UTaP1rrlSdlqNiHY5EBnfTkEvrLeV~W9DIju6FdSvTBBU6xmYsl7PifariI4GuduCShpfyvika0ywURkrznCiG5~wjbuyqA7ga-Fz7taW59MhZb8xcPi49bjBCixVjNXsJGoAOv~lZO962q9qnfA1UXFSnMucyQxmpp8Tl3aLFXL00B0ApQttmWvfePaHUjRkZinRfMc38JBZ3EXrQc5rfOKSHRnU7QHamrLofVCXHOrRa9Q2wsA__&Key-Pair-Id=APKAJ62UNSBCMEIPV4HA)
1.list item
2.bold *list*
- other list item
  another list item
[link with title](http://nodeca.github.io/pica/demo/)
some  as final
`
    var t = TO(Tstr, user)
    
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