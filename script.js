// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked

// "el" stands for the "element" that was just clicked
a = document.getElementById("piece3");
b = document.getElementById("piece2");
c = document.getElementById("piece1");
d = document.getElementById("piece4");
e = document.getElementById("alien");
f = document.getElementById("asteroid");
g = document.getElementById("planet");
h = document.getElementById("spaceship");
function appearImages(el){
		a.classList.remove("hidethis");
		b.classList.remove("hidethis");
		c.classList.remove("hidethis");
		d.classList.remove("hidethis");
		e.classList.remove("hidethis");
		f.classList.remove("hidethis");
		g.classList.remove("hidethis");
		h.classList.remove("hidethis");
		console.log("begin building!");
}

