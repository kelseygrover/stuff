function Character(name, profession, gender, age, strength, hitPoints, printStats) { 
    this.name = name;
    this.profession = profession;
    this. gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints
    this.printStats = function(){
        console.log(this)
    };
    this.IsAlive = function(){
        if(this.strength>0){
            console.log(this.name +" is still alive")
        }
    }
    this.Attack = function(personToo){
        this.strength = this.strength - personToo.hitPoints;
    }

    this.LevelUp = function (){
        this.age = this.age + 1;
        this.strength = this.strength + 5;
        this.hitPoints = this.hitPoints +25;
    }
    };
  
var kelsey = new Character("Kelsey", "Engineer", "Male", 25, 100, 7)
var nikki = new Character("Nikki", "Lady Boss", "Women", 18, 95, 17)


console.log(kelsey)

kelsey.Attack(nikki)

console.log(kelsey)