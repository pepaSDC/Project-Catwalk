const express = require('express');
const router = express.Router();
const api = require('../api.js');

router.get('/', (req, res) => {
  api.getAllProducts( (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

router.get('/:id', (req, res) => {
  api.getProductInfo( req.params.id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('backend:::',result.data)
      res.send(result.data);
    }
  });
});

router.get('/:id/styles', (req, res) => {
  api.getProductStyles( req.params.id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

router.get('/:id/related', (req, res) => {
  api.getRelatedProducts( req.params.id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
      // returns an array of products_id that are related to each other
    }
  });
});

module.exports = router;