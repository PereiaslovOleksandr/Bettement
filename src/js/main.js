import "focus-visible";
import lazyImages from "./modules/lazyImages";
import documentReady from "./helpers/documentReady";

documentReady(() => {
	lazyImages();
});
ScrollReveal().reveal(".headline1", { delay: 400, distance: "50px" });
ScrollReveal().reveal(".headline2", { delay: 500, distance: "50px" });
ScrollReveal().reveal(".headline3", { delay: 600, distance: "50px" });
ScrollReveal().reveal(".headline4", { delay: 1100, distance: "50px" });
ScrollReveal().reveal(".headline5", { delay: 1300, distance: "50px" });
ScrollReveal().reveal(".headline6", { delay: 1500, distance: "50px" });

const trigger = document.querySelector(".burger"); // or whatever triggers the toggle
const element = document.querySelector(".nav-menu ");
const body = document.querySelector(".page-home");

console.log(trigger);

trigger.addEventListener("click", function (e) {
	e.preventDefault();
	element.classList.toggle("active"); // or whatever your active class is
	body.classList.toggle("sidebar-is-open"); // or whatever your active class is
});
