function Didigtalpal(hungry, sleepy, bored, age, feed, sleep, play, increaseAge){

    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function(){
        if (this.hungry === true){
            console.log("That was yummy")
            this.hungry = false;
        }
    }
    this.sleep = function(){
        if (this.sleepy =  true){
            console.log("zzzzzzz")
            this.sleepy = false;
        }
    }
    this.play = function(){
        if (this.bored = true){
            console.log("Yay! Let's play!")
            this.bored = false;
        }
    }
    this.increaseAge = function(){
        this.age = this.age +1;
        console.log("happy birthday to me I am "+this.age+" years old!")
    }
}

var dog = new Didigtalpal(false, true, true, 7)
dog.outside = false;
dog.bark = function(){
    console.log("Woof Woof")
}

dog.goOutside = function (){
    if (dog.outside = false){
        console.log("yay I love the outdoors")
    }
}

dog.goInside = function(){
    if (dog.outside = true){
        console.log("do we have to? Fine...")
    }
}

var cat = new Didigtalpal(false, true, true, 8)

cat.houseCondition = 100;
cat.meow = function(){
    console.log("Meow Meow")
}
cat.destroyFurniture = function(){
    cat.houseCondition = cat.houseCondition-10;
    console.log("Muahaahahaha Take that furniture!")
}
cat.buyNewFurniture = function(){
    cat.houseCondition = cat.houseCondition + 50;
    console.log("are you sure about that?")
}
console.log(cat)
cat.destroyFurniture()
console.log(cat)

