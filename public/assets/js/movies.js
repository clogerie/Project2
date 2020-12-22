const MY_MOVIES = $("#my_movies")
getMovies()


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
    const title = $("<h1>").text(movie.title)
    const remove = $("<button>")
        .text("Delete")
        .attr("data-id", movie.id)
        .click(delete_movie)
    const update = $("<button>")
        .text("Update")
        .attr("data-update-id", movie.id)
        .attr("data-watched", movie.deleted)
        .click(updateMovie)
        const view = $("<button>")
        .text("View")
        .attr("data-view-id", movie.id)
        .click(viewMovie)
//         <!-- if movie.deleted = 1 add class red button, text going to be watch
        
    parent.append(title, remove, update, view)
    return parent
}


function delete_movie() {
    const id = $(this).attr("data-id")
    $.ajax({
        method: "DELETE",
        url: "/movies/" + id
    }).then(function (response) {
        window.location.reload()
    });
}

function viewMovie() {
    const id = $(this).attr("data-view-id")
    $.ajax({
        method: "GET",
        url: "/movies/" + id
    }).then(function (response) {
        // window.location.reload()
        console.log(response)
        const displayContainer = $("#display-results")
        displayContainer.html(response[0].title
    )
    });
}




function updateMovie() {
    const id = $(this).attr("data-update-id")
    const watched = $(this).attr("data-watched")
    let object = 0;
    if (watched == 0) {
        object = 1;
    }
    else { object = 0}
    $.ajax({
        method: "PUT",
        url: "/movies/" + id,
        data: {
            deleted: object
        }
    }).then(window.location.reload());
}
