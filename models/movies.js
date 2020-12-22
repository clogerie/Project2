// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var movie = {
  all: function (cb) {
    orm.all("movies", function (res) {
      cb(res);
    });
  },
  
  create: function (ob, cb) {
    const cols = ['title', 'rating', 'released', 'plot', 'poster']
    const vals = [ob.title, ob.rating, ob.released, ob.plot, ob.poster]
    orm.create("movies", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (value, colName, condition, cb) {
    orm.update("movies", value, colName, condition, function (res) {
      cb(res);
    });
  },
  deleteById: function (id, cb) {
    var condition = "id = " + id;
    orm.delete("movies", condition, function (res) {
      cb(res);
    });
  },
  findById: function (id, cb) {
    var condition = "id = " + id;
    orm.findOne("movies", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (movieControllers.js).
module.exports = movie;
