
$("#submitBtn").click(function (event) {
    event.preventDefault();
    $(".center").addClass("hide");
    displayMovieInfo();
    $("body").removeClass("slideShow")
    $("body").addClass("background")
    $("#saveBtn").removeClass("hide")
});

function displayMovieInfo() {

    var movie = $("input").val();

    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=b05256b3";
    console.log(queryURL)
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var movieDiv = $("<div class='movie'>");
        var title = response.Title
        var rating = response.Rated;
        var released = response.Released;
        var plot = response.Plot;

        var h1 = $("<h1 class='foo'>").text(title)
        var pRating = $("<p class='pTag'>").text("Rated: " + rating + " ");
        var pReleased = $("<p class ='pTag'>").text("Released: " + released);
        var pPlot = $("<p class = 'pTag'>").text(plot);
        var imgURL = response.Poster;
        var image = $("<img class='img1'>").attr("src", imgURL);

        movieDiv.append(image, pPlot, pReleased, pRating);
        $("#title").append(h1);
        $("#movies-view").append(movieDiv);



    });

}

$("#saveBtn").click(function (event) {
    //save to list function 
})

