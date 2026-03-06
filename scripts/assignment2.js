function convertTemp() {

    let temperature = prompt("enter temperature in celsius:");

    temperature = Number(temperature);

    let fahrenheit = (temperature * 9/5) + 32;

    document.getElementById("result").innerHTML =
    "the conversion of celsius " + temperature + "° to fahrenheit is " + fahrenheit + "°";

    console.log("celsius:", temperature);
    console.log("fahrenheit:", fahrenheit);
}
