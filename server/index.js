const express = require('express');
const reviews = require('./router/reviews.js');
const api = require('../src/api.js');


const app = express();

app.use(express.json());
app.use(express.static('public'));

app.get('/products', (req, res) => {
  api.getAllProducts( (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

app.get('/products/:id', (req, res) => {
  api.getProductInfo( req.params.id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

app.get('/products/:id/styles', (req, res) => {
  api.getProductStyles( req.params.id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

app.get('/products/:id/related', (req, res) => {
  api.getRelatedProducts( req.params.id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
      // returns an array of products_id that are related to each other
    }
  });
});

app.get('/reviews', (req, res) => {
  const product_id = parseInt(req.query.products_id);
  const sort = req.query.sort;

  api.getReviews(product_id, sort, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});


let port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});