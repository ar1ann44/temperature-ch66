console.log("conditionals");

// if statement condition (y/n)

// ----SYNTAX-----
// if(condition){
    // code to be run if condition is TRUE
//}

let result = 90;

if(result > 80){
    console.log("you passed the examen!!");
}

let result2 = 90;

if(result == result2){
    console.log("the values are the same")
}

// case 1: 5 == 5 true, true, true
// case 2: 5 == "5" - checks the value
// case 3: 5 === "5" - checks the value and type

// if-else statement condition (y/n)
// styntax
// if(condition){
//  code to be run if the condition is TRUE
//} else{
//  code to be run if the condtion is FALSE
//}

let points = 80;

if(points > 60){
    console.log("you passed the exam!");

} else{
    console.error("you lose!");
}

let waterTemp = 100;

if(waterTemp >= 100){
    console.log("the water is boiling");

}else{
    console.log("the water is not boiling");
}

// else-if statements
// styntax
// if(condition1){
//  code to be run if the condition is TRUE
//} else if(condition2){
//  code to be run if the condtion2 is TRUE
//}else {
// code to be run if conditions are FALSE
//}

function ageCalculator(){
    let age = 3;

    if(age < 13){
        console.log("you are a child");
    }else if(age < 21){
        console.log("you are a teen");
    }else if(age < 64){
        console.log("you are a adult");
    }else{
        console.log("you are a senior");
    }
}

// challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color  (use a prompt)
// ("green", "yellow", or "red") and tell the 
// bike what to do (Go!, Slow down, stop)

function traffic(){
    let lightColor = prompt("enter the light color");

    if(lightColor.toLocaleLowerCase() == "green"){
        console.log("go");
    }else if(lightColor.toLocaleLowerCase() == "yellow"){
        console.log("slow down");
    }else if(lightColor.toLocaleLowerCase() == "red"){
        console.log("stop");
    }else{
        console.error("thats not a correct color");
    }

}

function ticketPrice(){
    let ageTicket = prompt("enter you age");

    if(ageTicket < 12){
        console.log("the ticket price is $5");
    }else if(ageTicket < 19){
        console.log("the ticket price is $8");
    }else if(ageTicket > 18){
        console.log("the ticket price is $10");
    }else{
        console.log("that not an age number");
    }
}

function rollAccess(){
    let role = "guess";

    if(role.toLocaleLowerCase() == "admin"){
        console.log("Full access");
        document.write("Welcome admin.");
    }else if(role.toLocaleLowerCase() == "editor"){
        console.log("Access but limited actions");
        document.write("Welcome editor.");
    }else{
        console.error("you dont have access");
        document.write("ERROR");
        
    }

}

function outfitSuggestion(){
    let weather = prompt("enter the temperature");

    if(weather < 15){
        document.write("its cold wear a jacket");
    }else if(weather < 26){
        document.write("wear a sweater");
    }else if(ageTicket > 25){
        document.write("wear a t-shit");
    }else{
        document.write("add a valid temperature");
    }
}

function weatherOutFit(){
    const div = document.getElementById("results");
    let tmp = prompt("Enter a temperature");

    // clear the CSS
    div.classList.remove("cold","red");
    
    if(tmp < 15){
        div.innerHTML = "Jacket";
        div.classList.add("cold");
    }else if(tmp < 25){
        div.innerHTML ="Sweater";
    }else{
        div.innerHTML ="T-Shirt";
        div.classList.add("hot");
    }
}

weatherOutFit();