const MY_MOVIES = $("#my_movies")
getMovies()
// This function grabs todos from the database and updates the view
function getMovies() {
    $.get("/movies").then(function (response) {
        Display_Movies(response)
    });
}
function Display_Movies(movies) {
    for (const movie of movies) {
        MY_MOVIES.append(Movie_Card(movie))
    }
}
function Movie_Card(movie) {
    const parent = $("<div>").attr("data-id", movie.id)
    const title = $("<h1 class= 'whiteFont'>").text(movie.title)
    const plot = $("<p class= 'whiteFont'>").text(movie.plot)
    const remove = $("<button class='white'>")
        .text("Delete")
        .attr("data-id", movie.id)
        .click(delete_movie)
    const update = $("<button class='white'>")
        .text("Watched")
        .attr("data-id", movie.id)
        .click(updateMovie)
    parent.append(title, plot, remove, update)
    return parent
}
// This function deletes a todo when the user clicks the delete button
function delete_movie() {
    const id = $(this).attr("data-id")
    $.ajax({
        method: "DELETE",
        url: "/movies/" + id
    }).then(function (response) {
        window.location.reload()
    });
}
//This function updates the movie in the database
function updateMovie(movie) {
    $.ajax({
        method: "PUT",
        url: "/api/movies",
        data: movie
    }).then(function () {
        getMovies();
        const query = connection.query(
            "UPDATE movies SET ? WHERE ?",
            [
                {
                    watched: "true"
                }
            ],
        )
    });
}
