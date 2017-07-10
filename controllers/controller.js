const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect("mongodb://root:root@ds121190.mlab.com:21190/todo");

var schema = new mongoose.Schema({
  item: String
});

var ToDo = mongoose.model("ToDo", schema);
// ToDo({item: "Heyy babay"}).save((err) => {
//   if(err) throw err;
//   console.log('item saved');
// });

var encodedUrl = bodyParser.urlencoded({extended: false});

module.exports.fn = function(app){

  app.get('/todo', (req, res) => {
    ToDo.find({}, (err, data) => {
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', encodedUrl, (req, res) => {
    ToDo(req.body).save((err, data) => {
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.delete('/todo/:item', (req, res) => {
    // todos = todos.filter((todo) => {
    //   return todo.todo.replace(/ /g, " ") !== req.params.item;
    // });
    // res.json(todos);
  });

}
