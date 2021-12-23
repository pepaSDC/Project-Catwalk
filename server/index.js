const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello from server');
});

let port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});