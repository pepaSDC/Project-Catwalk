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
  console.log(req.body)
  console.log(typeof id)
  console.log(id)
  console.log(typeof itemCount)
  console.log(itemCount)
  api.postCart (id, itemCount, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

module.exports = router;