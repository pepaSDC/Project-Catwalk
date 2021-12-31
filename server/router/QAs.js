const express = require('express');
const router = express.Router();
const api = require('../api.js');

router.get('/questions', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const count = parseInt(req.query.count) || 5;
  const id = parseInt(req.query.product_id);
  api.getQuestions(page, count, id, (err, result) => {
    if (err) {
      console.error(err.message);
      res.send('error');
    } else {
      res.send(result.data);
    }
  });
});

router.get('/questions/:question_id/answers', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const count = parseInt(req.query.count) || 100;
  const id = parseInt(req.params.question_id);
  api.getAnswers(page, count, id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.send(result.data);
    }
  });
});

router.post('/questions', (req, res) => {
  const { body, name, email, product_id } = req.body;
  api.addQuestion(body, name, email, product_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(201).send('created');
    }
  });
});

router.post('/questions/:question_id/answers', (req, res) => {
  const question_id = parseInt(req.params.question_id);
  const { body, name, email, photos } = req.body;
  api.addAnswer(body, name, email, photos, question_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(result.status).send('created');
    }
  });
});

router.put('/questions/:question_id/helpful', (req, res) => {
  const question_id = parseInt(req.params.question_id);
  api.markQuestion('helpful', question_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(result.status).send('marked');
    }
  });
});

router.put('/questions/:question_id/report', (req, res) => {
  const question_id = parseInt(req.params.question_id);
  api.markQuestion('report', question_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(result.status).send('reported');
    }
  });
});

router.put('/answers/:answer_id/helpful', (req, res) => {
  const answer_id = parseInt(req.params.answer_id);
  api.markAnswer('helpful', answer_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(result.status).send('marked');
    }
  });
});

router.put('/answers/:answer_id/report', (req, res) => {
  const answer_id = parseInt(req.params.answer_id);
  api.markAnswer('report', answer_id, (err, result) => {
    if (err) {
      console.error(err);
      res.send('error');
    } else {
      res.status(result.status).send('reported');
    }
  });
});

module.exports = router;