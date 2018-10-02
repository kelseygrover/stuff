var mysql = require("mysql");


p = process.argv;




var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
//  readProducts()
// multiArtist()
// songRange()
//findSong()

// if (process.argv[2] == "song"){
//     song()
// }
song()
});

input = process.argv[2]


function song() {
    console.log("Selecting all products...\n");
    connection.query("SELECT songName FROM topSongs WHERE artist = "+input
    
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  

  
  function multiArtist() {
    console.log("Finding multiple artists...\n");

    connection.query("SELECT COUNT(artist), artist FROM topSongs GROUP BY artist HAVING COUNT(artist) > 1;" 
    
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }


    
  function songRange() {
    console.log("Finding multiple artists...\n");

    connection.query("SELECT artist FROM topSongs WHERE songYear BETWEEN 1995 AND 1997" 
    
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  

  function findSong() {
    console.log("Finding multiple artists...\n");

    connection.query("SELECT * FROM topSongs WHERE songName = 'yeah!' " 
    
    , function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  


  
