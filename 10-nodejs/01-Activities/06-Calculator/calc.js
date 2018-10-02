console.log(process.argv)

p = process.argv;
var one = parseInt(p[3]);
var two = parseInt(p[4]);

if (p[2] == "add") {

    console.log(one+"+"+two+" = "+ (one+two))
}

else if (p[2] == "subtract") {

    console.log(one+"-"+two+" = "+ (one-two))
}

else if (p[2] == "multiply") {

    console.log(one+"*"+two+" = "+ (one*two))
}

else if (p[2] == "divide") {

    console.log(one+"/"+two+" = "+ (one/two))
}

else if (p[2] == "remainder") {

    console.log("remainder of "+one+"/"+two+" = "+ (one%two))
}

else {

    console.log("Please enter 'add', 'subtract', 'multiply', 'divide', or 'remainder' before you input two numbers")
}