
$("#submitBtn").click(function (event) {
    event.preventDefault();
    $(".center").addClass("hide");
    displayMovieInfo();
});

function displayMovieInfo() {

    var movie = $("input").val();

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    console.log(queryURL)
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var movieDiv = $("<div class='movie'>");
        var btn = $("<button class='btn' id='saveBtn'>Add to my List </button>")
        var title = response.Title
        var rating = response.Rated;
        var released = response.Released;
        var plot = response.Plot;

        var h1 = $("<h1 class='foo'>").text(title)
        var pOne = $("<p>").text("Rating: " + rating);
        var pTwo = $("<p>").text("Released: " + released);
        var pThree = $("<p>").text(plot);
        var imgURL = response.Poster;
        var image = $("<img class='img'>").attr("src", imgURL);

        movieDiv.append(image, pThree, btn);
        $("#title").append(h1);
        $("#movies-view").append(movieDiv);



    });

}