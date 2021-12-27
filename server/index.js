const express = require('express');
const api = require('../src/api.js');

const reviews = require('./router/reviews.js');
const QA = require('./router/QAs.js');
const products = require('./router/products.js');


const app = express();

app.use(express.json());
app.use(express.static('public'));

app.use('/products', products);

app.use('/reviews', reviews);

app.use('/qa', QA);


let port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});