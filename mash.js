const rl = require('readline-sync');
const homes = ["Mansion", "Apartment", "Shack", "House", "Dump"];
const cars = ["Lambo", "Convertible", "Mercedes", "Box with Wheels", "The Invisible Boatmobile"];
function mash(){
    return "You will live in a "+ getHouse() + ", and have "+ getChildrenCount() + " kids, and you'll drive a "+ getCar() +", and you make "+ salary();
}
console.log(mash());


function getHouse(){
    let answer = process.argv[2];
    if (!answer){
        answer = rl.question("Please enter a type of home you would like.");
    }

    let houses = Math.random() > .5 ? homes[Math.floor(Math.random()*homes.length)] : answer 
   return (houses); 

}

function getChildrenCount(){
    let answer2 = process.argv[3];
    if (!answer2){
        answer2 = rl.question("Please enter a number of kids you would like to have.");
    }
    const randomKids = Math.random() > .5 ? Math.floor(Math.random()*101) : answer2
    return randomKids
}

function getCar(){
    let answer3 = process.argv[4];
    if (!answer3){
        answer3 = rl.question("Please enter a type of car you would like.");
    }
    const randomCar = Math.random() > .5 ? cars[Math.floor(Math.random()*cars.length)] : answer3
    return randomCar
}

function salary(){
    const randomSalary = Math.floor(Math.random(1000)*1000001)
    return randomSalary
}