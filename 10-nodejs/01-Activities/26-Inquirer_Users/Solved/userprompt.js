// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Check-box,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([

  {
    type: "input",
    name: "name",
    message: "Who are you???"
  }

]).then(function(user) {

  // If the user guesses the password...
  if (user.name === "Devyn") {

    inquirer.prompt([

      {
        type: "input",
        name: "lastname",
        message: "Who are you???"
      }

    ]).then(function(newUser) {
      console.log("User: ", user.name + newUser.lastname);
    })

  }

  else {

    console.log("Wrong user")

  }
});
