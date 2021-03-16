const fs = require('fs');

function quote() {
    var contentString = fs.readFileSync('./quotes.json');
    
    var content = JSON.parse(contentString);
    
    var randomInt = Math.floor(Math.random() * content.length);

    return content[randomInt];
}

module.exports = quote;

