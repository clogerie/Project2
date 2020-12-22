const view_movie_id = parseInt(window.location.search.split("=")[1])

const MY_MOVIES = $("#my_movies")
getMovies()




// This function grabs todos from the database and updates the view
function getMovies() {
    $.get("/movies").then(Display_Movies);
}
function Display_Movies(movies) {
    console.log(movies)
    for (const movie of movies) {
        MY_MOVIES.append(Movie_Card(movie))
    }
}
function Movie_Card(movie) {
    const parent = $("<div>").attr("data-id", movie.id)

    const title = $("<h1>").text(movie.title)

    const details = $("<div>")
        .addClass("details")
        .attr("data-id", movie.id)

    if (view_movie_id === movie.id) details.css("display", "block")
    else details.css("display", "none")

    const attributes = $("<ul>")
        .css("text-decoration", "none")

    const poster = $("<img>")
        .attr("src", movie.poster)
        .css("height", "50px")

    const watched = $("<li>")
    if (movie.watched) watched.text("Seen")
    else watched.text("Unseen")

    const rating = $("<li>").text("Rating: " + movie.rating)

    attributes.append(watched, rating)
    details.append(poster, attributes)

    const remove = $("<button>")
        .text("Delete")
        .attr("data-id", movie.id)
        .click(delete_movie)

    const update = $("<button>")
        .text("Mark as Viewed")
        .attr("data-id", movie.id)
        .attr("data-watched", movie.watched)
        .click(updateMovie)

    const view = $("<button>")
        .text("View")
        .click(viewMovie)

    parent.append(title, details, remove, update, view)
    return parent
}



//     const title = $("<h1 class= 'whiteFont'>").text(movie.title)
//     const plot = $("<p class= 'whiteFont'>").text(movie.plot)
//     const remove = $("<button class='white'>")
//         .text("Delete")
//         .attr("data-id", movie.id)
//         .click(delete_movie)
//     const update = $("<button class='white'>")
//         .text("Watched")
//         .attr("data-id", movie.id)
//         .click(updateMovie)
//     parent.append(title, plot, remove, update)
//     return parent
// }
// This function deletes a todo when the user clicks the delete button
function delete_movie() {
    const id = $(this).attr("data-id")
    $.ajax({
        method: "DELETE",
        url: "/movies/" + id
    }).then(() => window.location.reload());
}


function viewMovie() {
    let list = $(this).siblings()[1]
    list = $(list)

    const css = list.css("display")
    if (css === "block") {
        return window.location = "/my_movies"
    }

    list.css("display", "block")
    let id = list.attr("data-id")
    window.location = "/my_movies?id=" + id
}




function updateMovie() {
    const id = $(this).attr("data-id")
    const is_watched = $(this).attr("data-watched")

    let watched;
    if (parseInt(is_watched)) watched = 0
    else watched = 1

    $.ajax({
        method: "PUT",
        url: "/movies/" + id,
        data: { watched }
    }).then(() => window.location.reload());
}
