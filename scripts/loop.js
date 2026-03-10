console.log("Loops");

// -- FOR loop SYNTAX --
//for(start; condition ; interval){
// code to be repeated
//}

function multiTable(){
    
    for(let i=1;i<11;i++){
        console.log(`2 x ${i} = ${i*2} `);
    }
}

multiTable();

//print your name 5 times using a for loop

function multiName(){
    
    for(let i=1;i<6;i++){
        console.log(` ${i} ariana `);
    }
}

multiName();


// create a loop to diplay 1 - 20

// create a loop to display the numbers from 1 to 20.
for(let i=1;i<21;i++){

    if(i==1){
        console.log("Gold");
    }else if(i == 2){
        console.log("silver");
    }else if(i == 3){
        console.log("bronze");
        
    }
    else{
        console.log(`${i}`);

    }

}


function generateTable(){

    let table = document.getElementById("temps");

    table.innerHTML = "";

    for(let c = 0; c <= 100; c += 10){

        let f = (c * 9/5) + 32;

        table.innerHTML +=
        "<tr>" +
        "<td>" + c + "°C</td>" +
        "<td>" + f.toFixed(1) + "°F</td>" +
        "</tr>";
    }

}


function fillThermo(){
    let thermo = document.getElementById("thermo");
    thermo.innerHTML="";
    for(let i=0;i<10;i++){
        let level = document.createElement("div");
        level.classList.add("level");
        thermo.appendChild(level);
    }
}

function convertCtoF(){

    let temp = prompt("Enter temperature in Celsius:");

    temp = Number(temp);

    let fahrenheit = (temp * 9/5) + 32;

    document.getElementById("result").innerHTML =
    temp + "°C = " + fahrenheit.toFixed(2) + "°F";

}

function convertFtoC(){

    let temp = prompt("Enter temperature in Fahrenheit:");

    temp = Number(temp);

    let celsius = (temp - 32) * 5/9;

    document.getElementById("result").innerHTML =
    temp + "°F = " + celsius.toFixed(2) + "°C";

}


// challenge extra

function updateThermo(temp){

    let thermo = document.getElementById("thermo");

    thermo.style.height = temp + "px";

    if(temp <= 10){
        thermo.style.backgroundColor = "blue";
    }
    else if(temp <= 25){
        thermo.style.backgroundColor = "orange";
    }
    else{
        thermo.style.backgroundColor = "red";
    }
}
