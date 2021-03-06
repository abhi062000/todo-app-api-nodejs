$(function () {
  $.getJSON("http://localhost:3000/api/todos")
    .then(addTodos)
    .catch(function (err) {
      console.log(err);
    });

  $("#todoInput").keypress(function (e) {
    if (e.which == 13) {
      createTodo();
    }
  });

  $(".list").on("click", "li", function () {
    updateTodo($(this));
  });

  $(".list").on("click", "span", function (e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

function addTodo(todo) {
  var newTodo = $('<li class="task">' + todo.name + " <span>X</span></li>");
  // jquery method to store data
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

function createTodo() {
  var userInput = $("#todoInput").val();
  $.post("http://localhost:3000/api/todos", {
    name: userInput,
  })
    .then(function (todos) {
      addTodo(todos);
      $("#todoInput").val("");
    })
    .catch(function (err) {
      console.log(err);
    });
}

function removeTodo(todo) {
  var clickedId = todo.data("id");
  var deleteUrl = "/api/todos/" + clickedId;
  $.ajax({
    type: "DELETE",
    url: deleteUrl,
  })
    .then(function (data) {
      todo.remove();
    })
    .catch(function (err) {
      console.log(err);
    });
}

function updateTodo(todo) {
  var updateUrl = "/api/todos/" + todo.data("id");
  var isDone = !todo.data("completed");
  var updateData = { completed: isDone };
  $.ajax({
    method: "PUT",
    url: updateUrl,
    data: updateData,
  }).then(function (updatedTodo) {
    todo.toggleClass("done");
    todo.data("completed", isDone);
  });
}
