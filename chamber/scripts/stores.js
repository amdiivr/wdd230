let url = "data/data.json";

async function getStoreData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayStore(data.stores);
}

getStoreData(url);

const displayStore = (stores) => {
    const cards = document.querySelector("#stores");

    stores.forEach((store) => {
        let card = document.createElement("div");
        let name = document.createElement("h2");
        let portrait = document.createElement("img");
        let phone = document.createElement("h3");
        let rating = document.createElement("h3");

        name.textContent = `${store.name}`;
        phone.textContent = `Phone Number: ${store.phoneNumber}`;
        rating.textContent = `Rating: ${store.rating}`;

        portrait.setAttribute("src", store.img);
        portrait.setAttribute("alt", `Portrait of ${store.name}`);
        // portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "340")

        card.appendChild(portrait);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(rating);
        card.classList.add("card");

        cards.appendChild(card);
    })
}

// BUTTON GRID AND LIST 

document.querySelector("#gridView").addEventListener("click", e => {
    document.querySelector("#stores").classList.remove("listView");
    document.querySelector("#gridView").classList.add("selected");
    document.querySelector("#listView").classList.remove("selected");

})
document.querySelector("#listView").addEventListener("click", e => {
    document.querySelector("#stores").classList.add("listView");
    document.querySelector("#listView").classList.add("selected");
    document.querySelector("#gridView").classList.remove("selected");
})
// const gridButton = document.querySelector("#gridView");
// const listButton = document.querySelector("#listView");
// const display = document.querySelector("div.stores");

// gridButton.addEventListener("click", () => {
//     display.classList.add("grid");
//     display.classList.remove("list");
// });

// listButton.addEventListener("click", showList);

// function showList() {
//     display.classList.add("list");
//     display.classList.remove("grid");
// }
