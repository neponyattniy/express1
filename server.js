const express = require('express');
const app = express();

app.get('/card', function (req, res) {
  res.send('This route is for cards!');
});
app.get('/client', function (req, res) {
  res.send('This route is for clients!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});