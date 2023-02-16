const express = require('express');
const app = express();
const port = 3065;

app.get('/', (req, res) => {
  res.status(200).send('Hello Express');
});

app.listen(port, () => {
  console.log(port, 'port start!!');
});
