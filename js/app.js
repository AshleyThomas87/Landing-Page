

/**
 * Define Global Variables
 * 
*/

// Create area to house the NavBar
var navSection = document.createDocumentFragment();

// Pull existing UL from HTML page
var navbarList = document.getElementById("navbar__list");

var sectionOne = document.getElementById("section1");
var sectionTwo = document.getElementById("section2");
var sectionThree = document.getElementById("section3");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
var isInViewport = function (elem) {
  var bounding = elem.getBoundingClientRect();
  return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
createNav = () => {

  var sectionNames = ["#section1", "#section2", "#section3"];

  for (i = 0; i < 3; i++) {

    var link = document.createElement('li');

    var a = document.createElement('a');
    a.setAttribute('href', sectionNames[i]);
    a.innerText = "Section " + [i + 1];
    a.className = 'menu__link';

    link.appendChild(a);
    navSection.appendChild(link);
    navbarList.appendChild(navSection);

  }
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll', function(event) {
  if (isInViewport(sectionOne)) {
    console.log("section 1 is in the viewport");
    document.getElementById("section1").className = "active";
  }
});

window.addEventListener('scroll', function(event) {
  if (isInViewport(sectionTwo)) {
    console.log("section 2 is in the viewport");
    document.getElementById("section2").className = "active";
  }
});

window.addEventListener('scroll', function(event) {
  if (isInViewport(sectionThree)) {
    console.log("section 3 is in the viewport");
    document.getElementById("section3").className = "active";
  }
});

// Build menu 

// Scroll to section on link click

// Set sections as active


// page load
window.addEventListener("load", createNav());

console.log("where are you?");