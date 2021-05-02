var db = require('../models');

exports.listTodo = function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        });

}

exports.getTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            res.send(foundTodo);
        })
        .catch(function (err) {
            response.send(err);
        })
}

exports.updateTodo = function (req, res) {
    db.Todo.findOneAndUpdate({
                _id: req.params.todoId
            },
            req.body, {
                new: true
            }
        )
        .then(function (todo) {
            res.send(todo);
        })
        .catch(function (err) {
            res.send(err);
        })
}

exports.deleteTodo = function (req, res) {
    db.Todo.remove({
            _id: req.params.todoId
        })
        .then(function () {
            res.json({
                message: "Deleted it"
            });
        })
        .catch(function (err) {
            res.send(err);
        })
}

module.exports = exports;