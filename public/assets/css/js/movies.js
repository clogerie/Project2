// function displayMovieInfo() {

//     var movie = $(this).attr("data-name");
//     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

//     // Creates AJAX call for the specific movie button being clicked
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//       console.log(response);
//       // Creates a div to hold the movie
//       var movieDiv = $("<div class = 'movie'>")
//       // Retrieves the Rating Data
//       var rating = response.Rated;
      
//       // Creates an element to have the rating displayed
//       var pOne = $("<p>").text("Rating: " + rating);
//       // Displays the rating
//       movieDiv.append(pOne);
//       // Retrieves the release year
//       var release = response.Released;
//       // Creates an element to hold the release year
//       var pTwo = $("<p>").text("Release: " + release);

//       // Displays the release year
//       movieDiv.append(pTwo);

//       // Retrieves the plot
//       var plot = response.Plot;

//       // Creates an element to hold the plot
//       var pThree = $("<p>").text("Plot: " + plot);

//       // Appends the plot
//       movieDiv.append(pThree);
//       // Creates an element to hold the image
//         var moviePic = response.Poster;
//       // Appends the image
//       var movieImage = $("<img>").attr("src", moviePic);
//       movieDiv.append(movieImage);
//       // Puts the entire Movie above the previous movies.
//         $("#movies-view").prepend(movieDiv);
//     });

//   }

$(document).ready(function(){
    var apikey = "f342b261"
    $("#movieform").submit(function(event){
        event.preventDefault()

        var movie = $("#movie").val()
        var url = "http://www.omdbapi.com/?apikey="+apikey

        $.ajax({
            method:"GET",
            url:url+"&t="+movie,
            success:function(data){
                console.log(data)
            }
        })
    })
})

// const apiKey = "58f8a148";
// const movieInput = "";
// const queryURL = "http://www.omdbapi.com/?i=" + movieInput + "&apikey=58f8a148";

