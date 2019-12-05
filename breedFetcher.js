const request = require('request');

const API = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

request(API, (error, response, body) => {
  if (response) {
    const data = JSON.parse(body);
    if (body === "[]") {
      console.log("Error: Please enter a valid breed");
    }
    console.log(data[0]['description']);
  }
  console.log(error);
});