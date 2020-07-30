/* The document object model (DOM) */

// root element, i.e. this html file
document;

// the root html element
document.firstElementChild;

// the head element
document.firstElementChild.firstElementChild;

// the body. Can be saved inside a var
var body = document.firstElementChild.lastElementChild;

/* how to select HTML elements */

// returns the first h1 element in the tree via depth-first search, returns null if not found
// note that function param is a selector as in .css files
document.querySelector("h1");

// hierarchical selectors, the a inside h1
document.querySelector("h1 a");

// combining selectors. h1 elements of title class
document.querySelector("h1.title");

// talk about performance...
document.querySelectorAll("h1");

// returns array of all li elements
document.getElementsByTagName("li");

// returns array of all elements of btn class
document.getElementsByClassName("btn");

// self explanatory
document.getElementById("someId");

/* how to change css from code */

// all style properties are string type (wtf)
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.padding = "30%";

// add a class to an element. So can keep styles inside stylesheet,
// and enable/disable via script
document.querySelector("h1").classList.add("new-class");
document.querySelector("h1").classList.toggle("new-class");

/* modifying text */

// returns the child HTML content
document.querySelector("h1").innerHTML = "<em>Round TV</em>"

// returns the text string without HTML
document.querySelector("h1").textContent = "Round TV";

/* modifying attributes of elements */
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://roundtv.net");