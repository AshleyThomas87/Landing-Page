

/**
 * Define Global Variables
 * 
*/
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
  var link = document.createElement("li");
  link.innerHTML = '<a href="#section1">Section 1</a>';
  navbarList.appendChild(link);
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