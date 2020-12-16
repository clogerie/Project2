const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
<<<<<<< HEAD

const routes = require("./controllers/movieControllers.js");
=======

const routes = require("./controllers/movieControllers.js");


//var routes = require("./routes/html-routes");
const routes = require("./controllers/movieController.js");

>>>>>>> d16c2eece27a92f2b39a4ac4778a9f2b6f238ac4


// //var routes = require("./routes/html-routes");
// const routes = require("./controllers/movieControllers.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});