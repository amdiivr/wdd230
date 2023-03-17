// const todayDisplay = document.querySelector("#today");
// const visitsDisplay = document.querySelector("#visits");

// let numVisits = Number(window.localStorage.getItem("visits-ls")); 

// if (numVisits !== 0) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit!`;
// }

// numVisits++;

// localStorage.setItem("visits-ls", numVisits);

// const visitInfo = document.querySelector("#today");

// let lastVisit = Number(window.localStorage.getItem("last-visit"));

// if (lastVisit !== 0) {
//     let daysMilSeconds = Date.now() - lastVisit;
//     let days = (daysMilSeconds / 84600000).toFixed(0);

//     if (days == 1) {
//         visitInfo.textContent = `Your last visit was ${days} day ago! Welcome again!`;
//     }
//     else if (days == 0) {
//         visitInfo.textContent = "Your last visit was today!"
//     }
// }
// else {
//     visitInfo.textContent = "This is your first visit! Welcome!";
// }

// localStorage.setItem("last-visit", Date.now())

const visitsDisplay = document.getElementById("visits");
const daysBetweenOutput = document.getElementById("today");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastTime = Number(window.localStorage.getItem("lastVisitDateTime"));
numVisits++;
if (numVisits > 1){
    visitsDisplay.textContent = numVisits;
}else{
    visitsDisplay.textContent = 'This is your first visit!';
    lastTime = Date.now();
}
let daysBetween = (Date.now() - lastTime)/86400000;
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("lastVisitDateTime", Date.now());

let rounded = Math.round(daysBetween);
if (rounded !==0){
    daysBetweenOutput.textContent= rounded;
}else{
    daysBetweenOutput.textContent = "It hasn't been a day yet";
}