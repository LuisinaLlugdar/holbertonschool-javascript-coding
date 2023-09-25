#!/usr/bin/node
/*
Prints the title of a Star Wars movie where the episode
number matches a given integer.
The first argument is the movie ID
Use the Star wars API with the endpoint
https://swapi-api.hbtn.io/api/films/:id
Use the module request
*/
const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + id;

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(JSON.parse(body).title);
});
