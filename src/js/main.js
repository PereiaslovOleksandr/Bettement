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
