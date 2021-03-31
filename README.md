![Image of console_design](https://raw.githubusercontent.com/GowthamArputharaj/images/main/get_quote.png)

> Get Best Quotes in seconds.

# Install
$ npm install --global get_quote

# Console Design Usage
```javascript

const get_quote = require('get_quote');

// get quote and author
const quote = get_quote();

// use quote
console.log(`Once ${quote.author} said ${quote.text}`);

```

# Sample Output Response
```
// console.log(quote);
{
  text: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
  author: 'Albert Einstein'
}

// console.log(`Once ${quote.author} said ${quote.text}`);
Once Albert Einstein said Life is like riding a bicycle. To keep your balance you must keep moving.

```


# License
ISC © [Gowtham](https://github.com/GowthamArputharaj)
