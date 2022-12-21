const express = require('express');
const { Z_DEFAULT_STRATEGY } = require('zlib');
const app = express();

const users = [
    {
        name: 'zaur',
        age: 19,
        id: 1
    },
    {
        name: 'zau',
        age: 20,
        id: 2
    },
    {
        name: 'za',
        age: 21,
        id: 3
    }     
]

app.get('/array', function (req, res) {
    res.send(users);
  });
app.get('/card', function (req, res) {
  res.send('This route is for cards!');
});
app.get('/client', function (req, res) {
  res.send('This route is for clients!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});