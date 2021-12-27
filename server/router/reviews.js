const express = require('express');
const router = express.Router();
const api = require('../api.js');


router.get('/', (req, res) => {
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

module.exports = router;