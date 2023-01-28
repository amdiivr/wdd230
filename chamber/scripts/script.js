let dateNow = document.querySelector(".date");

let now = new Date();

let fullDate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

dateNow.innerHTML = `<p>${fullDate}</p>`;
