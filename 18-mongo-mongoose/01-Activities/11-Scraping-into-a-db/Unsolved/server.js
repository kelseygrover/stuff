// Using the tools and techniques you learned so far,
// you will scrape a website of your choice, then place the data
// in a MongoDB database. Be sure to make the database and collection
// before running this exercise.

// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "scrape";
var collections = ["scrapedData"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});



// An empty array to save the data that we'll scrape
var results = [];

// Main route (simple Hello World Message)
app.get("/", function(req, res) {
  res.send("Hello world");
});

// TODO: make two more routes


app.get("/scrape", function(req, res) {
  
  request("http://www.foxnews.com", function(error, response, html) {


    var $ = cheerio.load(html);
  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'

  // Select each element in the HTML body from which you want information.
  // NOTE: Cheerio selectors function similarly to jQuery's selectors,
  // but be sure to visit the package's npm page to see how it works
  // $("h2.story-heading").each(function(i, element) {
    $("h2.title").each(function(i, element) {

    var link = $(element).children().attr("href");
    var title = $(element).children().text();

    // Save these results in an object that we'll push into the results array we defined earlier
    results.push({
      title: title,
      link: link,
    });
  });

  // Log the results once you've looped through each of the elements found with cheerio
  console.log("scrape works");
});
});


// Route 1
// =======
// This route will retrieve all of the data
// from the scrapedData collection as a json (this will be populated
// by the data you scrape using the next route)

app.get("/insert", function(req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  console.log(results)
  for (i=0; i<results.length; i++){
    db.scrape.insert({"link" : results[i].link});
  }


  console.log("it works?")



});

// Route 2
// =======
// When you visit this route, the server will
// scrape data from the site of your choice, and save it to
// MongoDB.
// TIP: Think back to how you pushed website data
// into an empty array in the last class. How do you
// push it into a MongoDB collection instead?

/* -/-/-/-/-/-/-/-/-/-/-/-/- */

// Listen on port 3000
app.listen(8080, function() {
  console.log("App running on port 8080!");
});
