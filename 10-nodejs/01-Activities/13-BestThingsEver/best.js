var fs = require("fs")


fs.readFile("Unsolved\\best_things_ever.txt", "utf8", function(error, data) {

    if (error) {
       return console.log(error)
    }


    console.log(data)

    var dataArray = data.split(",")
 

    for (i=0; i<dataArray.length; i++){

        var out = dataArray[i]

        console.log(out)
    }


});
