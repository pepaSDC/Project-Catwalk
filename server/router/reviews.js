const express = require('express');
const router = express.Router();
const api = require('../api.js');


router.get('/', (req, res) => {
  const product_id = parseInt(req.query.product_id);
  const sort = req.query.sort || 'newest';

  api.getReviews(product_id, sort, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.data);
    }
  });
});

router.get('/meta', (req, res) => {
  const product_id = parseInt(req.query.product_id);
  api.getMetaReviews( product_id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

module.exports = router;