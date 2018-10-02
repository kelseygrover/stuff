/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/
$("#weight-sort").on("click", function(event) {
  event.preventDefault();

  $.getJSON("/weight", function(data) {
    // Call our function to generate a table body
    // displayResults(data);
    console.log(data)

    $("#animal-name").empty()
    $("#animal-legs").empty()
    $("#animal-class").empty()
    $("#animal-weight").empty()
    $("#animal-new-name").empty()

    
    $("#animal-name").append("Name")
    $("#animal-legs").append("Num Legs")
    $("#animal-class").append("Class")
    $("#animal-weight").append("Weight")
    $("#animal-new-name").append("But I'd Call It...")

    for (i=0; i<data.length; i++){
      $("#animal-name").append("<tr><th>"+data[i].name+"</th></tr>")
      $("#animal-legs").append("<tr><th>"+data[i].numLegs+"</th></tr>")
      $("#animal-class").append("<tr><th>"+data[i].class+"</th></tr>")
      $("#animal-weight").append("<tr><th>"+data[i].weight+"</th></tr>")
      $("#animal-new-name").append("<tr><th>"+data[i].whatIWouldReallyCallIt+"</th></tr>")
    }
  });


});

$("#name-sort").on("click", function(event) {
  event.preventDefault();


  $.get("/name", function(data) {
    // Call our function to generate a table body
    // displayResults(data);
    console.log(data)
    $("#animal-name").empty()
    $("#animal-legs").empty()
    $("#animal-class").empty()
    $("#animal-weight").empty()
    $("#animal-new-name").empty()
    
    
    $("#animal-name").append("Name")
    $("#animal-legs").append("Num Legs")
    $("#animal-class").append("Class")
    $("#animal-weight").append("Weight")
    $("#animal-new-name").append("But I'd Call It...")


    for (i=0; i<data.length; i++){

      $("#animal-name").append("<tr><th>"+data[i].name+"</th></tr>")
      $("#animal-legs").append("<tr><th>"+data[i].numLegs+"</th></tr>")
      $("#animal-class").append("<tr><th>"+data[i].class+"</th></tr>")
      $("#animal-weight").append("<tr><th>"+data[i].weight+"</th></tr>")
      $("#animal-new-name").append("<tr><th>"+data[i].whatIWouldReallyCallIt+"</th></tr>")
    }
  });



});

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});
