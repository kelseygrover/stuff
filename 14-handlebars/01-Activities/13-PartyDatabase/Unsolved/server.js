var orm = require("./orm.js");

orm.partyNames("party_name", "parties")

orm.clientNames("client_name", "clients")


orm.partyNamesType("party_name", "parties", "party_type", "grown-up")
// Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
