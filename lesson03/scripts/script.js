let year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;

let lastUpdate = new Date(document.lastModified);
document.querySelector("#currentDate").innerHTML = lastUpdate;