/* HAMBURGER MENU*/

let nav = document.querySelector(".navigation");
let button = document.getElementById("menu");


button.addEventListener("click", () => {nav.classList.toggle("responsive")}, false);

/* ACTUALLY DATE TO HEADER*/

let dateNow = document.querySelector(".date");

let now = new Date();

let fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

dateNow.innerHTML = `<p>${fullDate}</p>`;

/* ACTUALLY DATE FOOTER */

let year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;

let lastUpdate = new Date(document.lastModified);
document.querySelector("#currentDate").innerHTML = lastUpdate;

// ALERT ACTUALLY

let day = new Date().getDay();
let header = document.querySelector("header");

let dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

if (dayOfTheWeek[day] == "Monday" | dayOfTheWeek[day] == "Tuesday") {
    let alertBanner = document.createElement("div");
    alertBanner.innerHTML = "<span>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</span>";
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✘";
    alertBanner.appendChild(deleteButton);
    alertBanner.classList.add("alert");
    header.prepend(alertBanner);
    deleteButton.addEventListener("click", () => {
        alertBanner.remove();    
});
}