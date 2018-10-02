// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)




// Take in the command line arguments




// Build your address as an array or string




// Then use Geocoder NPM to geocode the address

var NodeGeocoder = require('node-geocoder');

console.log(NodeGeocoder)
 
var options = {
  provider: 'google',
 
  // Optional depending on the providers
  httpAdapter: 'https', // Default
  apiKey: 'AIzaSyBBe-qYGZoJptR5xKEkJpid9mb1ilx3UCE', // for Mapquest, OpenCage, Google Premier
  formatter: null         // 'gpx', 'string', ...
};
 
var geocoder = NodeGeocoder(options);
console.log(geocoder)
 
// Using callback
geocoder.geocode('29 champs elysée paris', function(err, res) {
  console.log(res);
});
