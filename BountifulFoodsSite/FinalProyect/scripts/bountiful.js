/* HAMBURGER MENU*/

let nav = document.querySelector(".navigation");
let button = document.getElementById("menu");

button.addEventListener("click", () => {nav.classList.toggle("responsive")}, false);

/* ACTUALLY DATE FOOTER */

let year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;

let lastUpdate = new Date(document.lastModified);
document.querySelector("#currentDate").innerHTML = lastUpdate;