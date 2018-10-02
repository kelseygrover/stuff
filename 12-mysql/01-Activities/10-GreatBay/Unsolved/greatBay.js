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
