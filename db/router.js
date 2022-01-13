const express = require('express');
const router = express.Router();
const db = require('./database.js');

router.get('/', (req, res) => {
  const page = req.query.page || 1;
  const count = req.query.count|| 5;
  const id = req.query.product_id;
  db.getQ(page, count, id, response => {
    res.send(response)
  }, true);
});

router.get('/:question_id/answers', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const count = parseInt(req.query.count) || 5;
  const id = parseInt(req.params.question_id);
  db.getA(page, count, id, response => {
    res.send(response);
  })
});




module.exports = router;