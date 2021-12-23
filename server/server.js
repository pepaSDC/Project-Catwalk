const express = require('express');

const app = express();

app.get('/products', (req, res) => {
  res.send('hello');
});


let port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});