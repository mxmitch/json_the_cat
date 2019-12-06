const request = require('request');

const API = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];

const fetchBreedDescription = function(breedName, callback) {
  request(API, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length !== 0) {
      desc = data[0].description;
    } else {
      desc = "This is an error message";
    }
    callback(error, desc);
  });
};

module.exports = {
  fetchBreedDescription
};