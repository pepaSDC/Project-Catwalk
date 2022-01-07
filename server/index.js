const express = require('express');
const api = require('./api.js');
const compression = require('compression');

const reviews = require('./router/reviews.js');
const QA = require('./router/QAs.js');
const products = require('./router/products.js');
const cart = require('./router/cart.js');


const app = express();

app.use(express.json());
app.use(compression());
app.use(express.static('public'));

app.use('/products', products);

app.use('/reviews', reviews);

app.use('/qa', QA);

app.use('/cart', cart);


let port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});