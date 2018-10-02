function Programmer(name, job, age, fav){

    this.name = name;
    this.job = job;
    this.age = age;
    this.fav = fav;
}

Programmer.prototype.print = function(){
    console.log("Name: "+this.name)
    console.log("Job Title: "+this.job)
    console.log("Age: "+this.age)
    console.log("Favorite Language: "+this.fav)
}

var prog = new Programmer("Kelsey", "Engineer", 25, "R")

prog.print()


