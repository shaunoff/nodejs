var mongoose = require('mongoose')

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}
// var Todo = mongoose.model('Todo',{
//   text: {
//     type: String,
//     required: true,
//     minLength: 1,
//     trim: true,
//
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Date,
//     default: new Date
//   }
// });
//
//
// var newTodo = new Todo({
//   text: 'ghdfgdfjkghdjkghdkghkdghjkdhgkjdhgkhdkghdkghkdgh               ',
//
// })
// newTodo.save().then((resp)=>{
//   console.log(resp)
// }, (e)=>{
//   console.log(e)
// });
