const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#weather-logo');
const description = document.querySelector('#infoWeather');
const windSpeed = document.querySelector('#speedWind');
const windChill = document.querySelector('#chillWind');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Lima&units=imperial&appid=539982668df28620342a0d64cd57c451";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // this is for testing the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function calculateWindChill(speed, temp) {
    if (windSpeed > 3.0 & temperature <= 50) {
        return (35.74 + .621 * temp - (35.75 * speed ** .16) + .4275 * temp * speed ** .16).toFixed(0);
    }
    else {
        return "N/A"
    }
}
function toUpperCamelCase(inputString) {
    return inputString.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return `${firstLetter}${word.slice(1)}`;
    }).join(" ");
}
function displayResults(weatherData) {
    const description = weatherData.weather[0].description.toLowerCase();
    const capitalizedDescription = toUpperCamelCase(description);

    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`);
    icon.setAttribute("alt", `${weatherData.weather[0].description}`);
    description.textContent = capitalizedDescription;
    windSpeed.innerHTML = `${weatherData.wind.speed}`;
    windChill.innerHTML = `${calculateWindChill(weatherData.wind.speed, weatherData.main.temp)}`;
}

apiFetch();