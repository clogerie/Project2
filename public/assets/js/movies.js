const MY_MOVIES = $("#my_movies")
getMovies()

<<<<<<< HEAD
// This function grabs todos from the database and updates the view
=======



// This function grabs todos from the database and updates the view

>>>>>>> 5f613682da33ef8be8d0ca2aacf0f8b77297c12a
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
<<<<<<< HEAD
    const parent = $("<div class='row'>").attr("data-id", movie.id)
    const div1 = $("<div class='three columns'>");
    const div2=$("<div class='six columns'>")
    const div3=$("<div class='three columns'>")

    const title = $("<h3>").text(movie.title)
    const plot = $("<p>").text(movie.plot)
=======
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



    const title = $("<h1 class= 'whiteFont'>").text(movie.title)
    const plot = $("<p class= 'whiteFont'>").text(movie.plot)
>>>>>>> 5f613682da33ef8be8d0ca2aacf0f8b77297c12a
    const remove = $("<button class='white'>")
        .text("Delete")
        .attr("data-id", movie.id)
        .click(delete_movie)
    const update = $("<button class='white'>")
        .text("Watched")
        .attr("data-id", movie.id)
        .click(updateMovie)
<<<<<<< HEAD
    const poster=$("<img class='poster'>").attr("src", movie.poster);

    div1.append(poster);
    div2.append(title, plot);
    div3.append(remove, update)


    parent.append(div1, div2, div3)
    $(".container").append(parent)
    
    
}

// This function deletes a todo when the user clicks the delete button
=======
    parent.append(title, plot, remove, update)
    return parent
}
// This function deletes a todo when the user clicks the delete button

>>>>>>> 5f613682da33ef8be8d0ca2aacf0f8b77297c12a
function delete_movie() {
    const id = $(this).attr("data-id")
    $.ajax({
        method: "DELETE",
        url: "/movies/" + id
    }).then(function (response) {
        window.location.reload()
    });
}


<<<<<<< HEAD
=======
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
>>>>>>> 5f613682da33ef8be8d0ca2aacf0f8b77297c12a

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
<<<<<<< HEAD

=======
>>>>>>> 5f613682da33ef8be8d0ca2aacf0f8b77297c12a
                {
                    watched: "true"
                }
            ],
        )
<<<<<<< HEAD


    });

}
=======
    });
}

>>>>>>> 5f613682da33ef8be8d0ca2aacf0f8b77297c12a
