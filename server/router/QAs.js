const express = require('express');
const router = express.Router();
const api = require('../../src/api.js');

router.get('/', (req, res) => {
  const page = parseInt(req.query.page);
  const count = parseInt(req.query.count);
  const id = parseInt(req.query.product_id);
  api.getQuestions(page, count, id, (err, result) => {
    if (err) {
      console.error(err.message);
    } else {
      res.send(result.data);
    }
  });
});

router.get('/:question_id/answers', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const count = parseInt(req.query.count) || 5;
  const id = parseInt(req.params.question_id);
  api.getAnswers(page, count, id, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result.data);
    }
  });
});

router.post('/', (req, res) => {
  const { body, name, email, product_id } = req.body;
  api.addQuestion(body, name, email, product_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(201).send('created');
    }
  });
})

router.post('/:question_id/answers', (req, res) => {
  const question_id = parseInt(req.params.question_id);
  const { body, name, email, photos } = req.body;
  api.addAnswer(body, name, email, photos, question_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.send('created');
    }
  });
})

module.exports = router;