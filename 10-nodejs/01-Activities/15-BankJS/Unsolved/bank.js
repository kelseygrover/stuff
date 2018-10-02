
var fs = require("fs");

console.log(fs)

var array
var number
var sum = 0;
var p = process.argv[2]
console.log(p)

function sumwriter(){fs.readFile("bank.txt", "utf8", function(error, data) {

  if (error) {
    return console.log(error);
  }

  //console.log(data);

  var dataArr = data.split(",");
 
  //console.log(dataArr);

  for (i=0; i<dataArr.length; i++){

    newArr = parseFloat(dataArr[i])
    //console.log("this is the new number "+newArr)
      
      sum = newArr +sum
     // console.log(sum)
  }

  console.log(sum)

});
}


function writer(number) {
    fs.appendFile("bank.txt", number, function (err) {

        if (err) {
            console.log(err)
        }

        console.log(number.replace(",", "") + " dollars added to your account!")
    })

}

function negwriter(negnumber) {

    fs.appendFile("bank.txt", ", -"+negnumber, function (err) {

        if (err) {
            console.log(err)
        }

        console.log(negnumber + " dollars taken out of your account!")
    })

}


if (p == "total") {
    sumwriter()
}

if (p == "deposit") {

    var deposit = process.argv[3];

    writer(" ,"+deposit)

}

if (p =="withdraw"){
    var negdeposit = process.argv[3];

    negwriter(" ,"+ negdeposit)
}




