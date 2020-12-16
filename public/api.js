const apiKey = "58f8a148";

const movieInput = "";

const queryURL = "http://www.omdbapi.com/?apikey=" + apiKey + "&";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
  });