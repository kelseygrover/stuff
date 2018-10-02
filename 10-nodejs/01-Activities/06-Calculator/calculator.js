console.log(process.argv)

p = process.argv
if (p[2] == "add") {

    var one = parseInt(p[3]);

    var two = parseInt(p[4]);

    console.log(one+two)
}


else if (p[2] == "subtract") {

    var one = parseInt(p[3]);

    var two = parseInt(p[4]);

    console.log(one-two)
}

else if (p[2] == "multiply") {

    var one = parseInt(p[3]);

    var two = parseInt(p[4]);

    console.log(one*two)
}

else if (p[2] == "divide") {

    var one = parseInt(p[3]);

    var two = parseInt(p[4]);

    console.log(one/two)
}

else if (p[2] == "remainder") {

    var one = parseInt(p[3]);

    var two = parseInt(p[4]);

    console.log(one%two)
}