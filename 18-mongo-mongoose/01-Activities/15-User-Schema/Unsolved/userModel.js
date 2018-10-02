var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  /* TODO:
   * Add four entries into our schema. These should be:
   *

   * 1: username: A string that will be be required, and also trimmed.
   * 2: password: A string that will be required, trimmed, and at least 6 characters.
   * 3: email: A string that must be a valid email address and unique in our collection.
   * 4: userCreated: A date that will default to the current date.
   *
   * TIP: The regex for checking if a string is an email is: /.+\@.+\..+/
   * Use that with the model attribute that checks for a valid match.
   * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ */

    username: {
    type: String,
    trim: true,
    required: "String is Required"
  },
 
  password: {
    type: String,
    unique: true,
    required: "String is Required"
  },
  
  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  // `boolean` must be of type Boolean
  boolean: Boolean,
  // `array` must be an Array
  array: Array,
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  },
  // `longstring` must be of type String
  // `longstring` uses a custom validation function to only accept values 6 characters or more
  // A custom error message is thrown if the validation fails
  longstring: {
    type: String,
    validate: [
      // Function takes in the new `longstring` value to be saved as an argument
      function(input) {
        // If this returns true, proceed. If not, return the error message below
        return input.length >= 6;
      },
      // Error Message
      "Longstring should be longer."
    ]
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
