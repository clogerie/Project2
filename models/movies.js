// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

class Movie {
  all (cb) {
    orm.read("Movie", function(res) {
      cb(res);
    });
  }
  // The variables cols and vals are arrays.
  create (vals, cb) {
    orm.create("Movie", vals, function(res) {
      cb(res);
    });
  }
  update (vals, colName, condition, cb) {
    orm.update("Movie", vals, colName, condition, function(res) {
      cb(res);
    });
  }
  delete (vals, cb) {
    orm.delete("Movie", vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = new Movie();