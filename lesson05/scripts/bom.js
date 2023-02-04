let input = document.querySelector("#input");
let button = document.querySelector("#button");
let list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value !== "") {
        let chapter = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.ariaLabel = `Delete ${input.value} item.`;
        deleteButton.addEventListener("click", () => {
            chapter.remove();
            input.focus();
        });
        chapter.textContent = input.value;
        chapter.appendChild(deleteButton);
        list.appendChild(chapter);
        input.value = "";
        input.focus();
    }
});

document.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        button.dispatchEvent(new Event("click"));
    }
})