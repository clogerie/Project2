// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  // cms route loads cms.html
  app.get("/movies", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/movies.html"));
  });


};

    res.sendFile(path.join(__dirname, "../public/about.html"));
  

  // cms route loads cms.html
  app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));

  // app.get("/movies", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });
  
  // cms route loads cms.html

  app.get("/cms", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));

  });
  
  // blog route loads blog.html

  app.get("/movies", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/movies.html"));

  app.get("/blog", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));

  });
  
  // authors route loads author-manager.html

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));

  app.get("/authors", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));


  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
  
  // blog route loads blog.html
  app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  // authors route loads author-manager.html
  app.get("/movies", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/movies.html"));

  });



