// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=539982668df28620342a0d64cd57c451";

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
   const description = weatherData.weather[0].description.toLowerCase();
   const capitalizedDescription = description.split(" ").map(word => {
       let firstLetter = word.charAt(0).toUpperCase();
       return `${firstLetter}${word.slice(1)}`;
   }).join(" ");

   currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
   weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`);
   weatherIcon.setAttribute("alt", `${weatherData.weather[0].description}`);
   captionDesc.textContent = capitalizedDescription;
}

apiFetch();
