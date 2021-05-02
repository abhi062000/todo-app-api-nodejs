const {
    response
} = require('express');
var express = require('express');
const {
    getTodo
} = require('../helpers/todos');
var router = express.Router();
var db = require("../models");
var helpers = require('../helpers/todos');


// can use other file for function
// list todos
router.get('/', helpers.listTodo);

// keeping create todo function in this file for reference
// create todos
router.post('/', function (req, res) {
    db.Todo.create(req.body)
        .then(function (newtodos) {
            res.status(201).json(newtodos);

        })
        .catch(function (err) {
            res.send(err);
        });

});

// in single statement or below method can be used
router.route('/:todoId')
    .get(helpers.getTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

// router.get('/:todoId', helpers.getTodo);
// router.put('/:todoId', helpers.updateTodo);
// router.delete('/:todoId', helpers.deleteTodo);

module.exports = router;