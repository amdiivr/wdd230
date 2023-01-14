let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12"
];

let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = monthName + "/" 
+ d.getDate() + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
let year = d.getFullYear();

document.getElementById("year").textContent = year;
document.getElementById("currentDate").textContent = fullDate;