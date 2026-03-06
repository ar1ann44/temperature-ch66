function convertTemperature(){

    let temperature = Number(document.getElementById("temperature").value);
    let scale = document.getElementById("scale").value;

    let result = document.getElementById("result");
    let converted;

    if(scale === "C"){
        converted = (temperature * 9/5) + 32;
        result.textContent = temperature + "°C is " + converted.toFixed(2) + "°F";
    }
    else if(scale === "F"){
        converted = (temperature - 32) * 5/9;
        result.textContent = temperature + "°F is " + converted.toFixed(2) + "°C";
    }

    result.classList.remove("cold","warm","hot");

    // extra chalenge :)
    if(converted < 10){
        result.classList.add("cold");
    }
    else if(converted < 25){
        result.classList.add("warm");
    }
    else{
        result.classList.add("hot");
    }
}