#!/usr/bin/node
/*
Prints the number of movies where the character “Wedge Antilles” is present
The first argument is the API URL of the Star wars
API: https://swapi-api.hbtn.io/api/films/
Wedge Antilles character's ID is 18
*/
const request = require('request');
const url = process.argv[2];
let count = 0;

request(url, (err, res, body) => {
  if (err) {
    console.log(err);
    return;
  }
  const films = JSON.parse(body).results;
  for (const film of films) {
    for (const character of film.characters) {
      if (character.endsWith('/18/')) {
        count++;
      }
    }
  }
  console.log(count);
});
