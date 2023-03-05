// WEATHER 

let windSpeed = 21;
let temperature = 84.2;

function CalculateWindChill(speed, temp) {
    return 35.74 + .621*temp - (35.75*speed**.16) + .4275*temp*speed**.16;
}

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#speedWind").textContent = windSpeed;
document.querySelector("#chillWind").textContent = CalculateWindChill(windSpeed, temperature).toFixed(1);