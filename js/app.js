

/**
 * Define Global Variables
 * 
*/

// Create area to house the NavBar
var navSection = document.createDocumentFragment();

// Pull existing UL from HTML page
var navbarList = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



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

// Build menu 

// Scroll to section on link click

// Set sections as active


// page load
window.addEventListener("load", createNav());

console.log("where are you?");