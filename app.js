const express = require('express');
const controller = require('./controllers/controller');
const ejs = require('ejs');

const app = express();

controller.fn(app);

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.listen(3000, () => {
  console.log('listening to server');
});
