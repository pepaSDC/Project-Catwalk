const express = require('express');
const router = express.Router();
const api = require('../api.js');

router.get('/', (req, res) => {
  api.getCart ((err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

router.post('/', (req, res) => {
  req.body.sku_id, req.body.count
  api.postCart (req.body.sku_id, req.body.count, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

module.exports = router;