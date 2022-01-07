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
  let id = Number(req.body.sku_id)
  let itemCount = Number(req.body.count)
  api.postCart (id, itemCount, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

module.exports = router;