const trigger = document.querySelector(".burger"); // or whatever triggers the toggle
const element = document.querySelector(".menu ");
const body = document.querySelector("body");

console.log(trigger);

trigger.addEventListener("click", function (e) {
	e.preventDefault();
	element.classList.toggle("active"); // or whatever your active class is
	body.classList.toggle("sidebar-is-open"); // or whatever your active class is
});
