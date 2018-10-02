


var dog = {
    raining: true,
    noise: "woof",
    makenoise: function (){
        if (this.raining == true){
            console.log(this.noise)
        }
        else console.log("it aint rainin")
    }
}


var cat = {
    raining: false,
    noise: "Meow",
    makenoise: function (){
        if (this.raining == true){
            console.log(this.noise)
        }
        else console.log("it aint rainin")
    }
}


console.log(dog.makenoise())

console.log(cat.makenoise())