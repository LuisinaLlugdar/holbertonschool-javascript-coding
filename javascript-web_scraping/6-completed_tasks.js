#!/usr/bin/node
/*
Computes the number of tasks completed by user id.
The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
Only print users with completed task
*/
const request = require('request');
const url = process.argv[2];

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const todos = JSON.parse(body);
  const completed = {};
  for (const todo of todos) {
    if (todo.completed === true) {
      if (completed[todo.userId] === undefined) {
        completed[todo.userId] = 1;
      } else {
        completed[todo.userId] += 1;
      }
    }
  }
  console.log(completed);
});
