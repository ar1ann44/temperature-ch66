console.log("functions");

//1. Function declaration
function sayHello(){
    console.log("Hello cohort 66");
}

//2.call
sayHello();

//Example 2. fn with 1 parameter
function greetBird(birdName){
    document.getElementById("results").innerHTML+=`<li>${birdName}</li>`;
}

greetBird("red");
greetBird("blue");
greetBird("yellow");

//Example 3. fn with 2 parameter
function greetPlayer(firstName, lastName){
    document.getElementById("results").innerHTML+=`<p> Welcome Back ${firstName} ${lastName}</p>`;
}

greetPlayer("robert", "rife");
greetPlayer("ariana", "osuna");
greetPlayer("jeese", "soto");

function doubleScore(playerScore){
    let score = playerScore *2;
    console.log(score)
}

doubleScore("10");

//example 4 fn with promt

function askCharacterName(){
    let characterName = prompt("Enter your name: ");
    console.log(characterName);
}

//Example 5 fn 
function add(num1=0,num2=0){
    let total = num1 + num2;
    console.log(total);
}

add(2,4);
add(3);
add();

// Challenge 2: Combine Names
// Task:/| - Create a function called 'combineNames' that takes two parameters: 'firstName' and 'lastName'.Il - The function should return the full name in the format: '"Hello firstName lastName"•
// - If either parameter is missing, it should use thedefault value '"Unknown"' for that parameter.


function combineNames(firstName=0,lastName=0){
    let names = firstName + firstName;
    console.log(names);
}

combineNames ("Alice", "Johnson"); // Alice Johnson 
combineNames ("Alice");// Alice Unknown 
combineNames(); // Unknown Unknown

/*/Chalenge 3 convert minutes to seconds
function convertToSeconds(minutes){
    let seconds = minutes *60;
    console.log(seconds)
}

convertToSeconds("10");

*/

function convertToSeconds(){
    console.log("successful connection to the server")
    let min = prompt("enter mins:")
    console.log(min);
    let sec = min * 60;
    document.getElementById("results").innerHTML+=`<p> ${sec} seconds </p>`;

}