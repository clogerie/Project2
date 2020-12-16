// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

class Movie {
  all (cb) {
    orm.read("movies", function(res) {
      cb(res);
    });
  }
  // The variables cols and vals are arrays.
  create (vals, cb) {
    orm.create("movies", vals, function(res) {
      cb(res);
    });
  }
  update (vals, colName, condition, cb) {
    orm.update("movies", vals, colName, condition, function(res) {
      cb(res);
    });
  }
  delete (vals, cb) {
    orm.delete("movies", vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = new Movie();