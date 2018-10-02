var mysql = require("mysql");

var p = process.argv;

var userInput = p[2]

var connection = mysql.createConnection({
  host: "hookworm-db-instance.clajc2zp7hmm.us-west-1.rds.amazonaws.com",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "HookwormDB",

  // Your password
  password: "Tracker2012",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM bombs", function(err, res) {
    if (err) throw err;
    console.log(res);
    createProduct()

  });
}


function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO songs SET ?",
      {
        song: "Bad Boys",
        title: "stuff",
        rating: "G"
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
      "UPDATE songs SET ? WHERE ?",
      [
        {
          title: userInput
        },
        {
          rating: "G"
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " products updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        deleteProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function deleteProduct() {
    console.log("Deleting all strawberry icecream...\n");
    connection.query(
      "DELETE FROM songs WHERE ?",
      {
        rating: "NC-17"
      },
      function(err, res) {
        console.log(res.affectedRows + " products deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  }
  
  function readProducts() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM songs", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  