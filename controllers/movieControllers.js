const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const movie = require("../models/movies.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Create all our routes and set up logic within those routes where required.
router.get("/api/movies", function(req, res) {
  movie.read(function(data) {
    res.json(data);
    console.log(data);
  });
});

router.post("/api/movies", function(req, res)
{console.log(req.body);
 movie.create(req.body, function(data) {
   
    // Send back the ID of the new quote
    res.json({ id: data.insertId });

  });
});

router.put("/api/movies/:id", function(req, res) {

console.log(req.body)

  movie.update(req.body, "id", req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.json({ id: req.params.id});
    }
  });
});

router.delete("/api/movies/:id", function(req, res) {
  

  movie.delete(req.params.id, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
