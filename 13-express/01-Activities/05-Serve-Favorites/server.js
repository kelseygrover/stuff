// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var place;

// Create our server
var server = http.createServer(handleRequest);



// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    var path = req.url;

    console.log(path)

    switch (path) {

        case "/foods":
          return newPage(path+".html", res);
      
          case "/movies":
          return newPage(path+".html", res);

          case "/favoriteCSS":
          return newPage(path+".html", res);
      
        default: "/index.html"
        return newPage(path+".html", res);
        }
  // Here we use the fs package to read our index.html file

}


function newPage(place, res) {
    fs.readFile(__dirname + place, function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
}

server.listen(PORT, function() {
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:" + PORT);
  });