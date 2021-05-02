var mongoose = require('mongoose');

// name,completed,data_created
var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be Blank!'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }

});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;