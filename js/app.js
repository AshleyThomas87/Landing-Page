

/**
 * Define Global Variables
 * 
*/

// Create area to house the NavBar
const navSection = document.createDocumentFragment();

// Pull existing UL from HTML page
const navbarList = document.getElementById("navbar__list");
const sectionOne = document.getElementById("section1");
const sectionTwo = document.getElementById("section2");
const sectionThree = document.getElementById("section3");
const sectionFour = document.getElementById("section4");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const isInViewport = function (elem) {
  let bounding = elem.getBoundingClientRect();
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
  let sectionNames = document.querySelectorAll('section');
  activeClass = (activeSection) => {
    activeSection.classList.add('active');
  }

  sectionNames.forEach((section) => {

    let link = document.createElement('li');

    let a = document.createElement('a');

    a.innerText = section.getAttribute("data-nav");
    a.className = 'menu__link';
    a.addEventListener("click", () => {
      activeClass(section);
      section.scrollIntoView({ behavior: "smooth" });
    });

    link.appendChild(a);
    navSection.appendChild(link);
  })
  navbarList.appendChild(navSection);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

const checkDisplay = window.matchMedia("(max-width: 500px")

window.addEventListener('scroll', function (event) {
  if (!checkDisplay.matches) {
    if (isInViewport(sectionOne)) {
      console.log("section 1 is in the viewport");
      document.getElementById("section1").className = "active";
    }
    else {
      document.getElementById("section1").classList.remove('active');
    }
  }
});

window.addEventListener('scroll', function (event) {
  if (!checkDisplay.matches) {
  if (isInViewport(sectionTwo)) {
    console.log("section 2 is in the viewport");
    document.getElementById("section2").className = "active";
  }
  else {
    document.getElementById("section2").className = "active";
  }
  }
});


window.addEventListener('scroll', function (event) {
  if (!checkDisplay.matches) {
  if (isInViewport(sectionThree)) {
    console.log("section 3 is in the viewport");
    document.getElementById("section3").className = "active";
  }
  else {
    document.getElementById("section3").classList.remove('active');
  }
}
});

window.addEventListener('scroll', function (event) {
  if (!checkDisplay.matches) { 
  if (isInViewport(sectionFour)) {
    console.log("section 4 is in the viewport");
    document.getElementById("section4").className = "active";
  }
  else {
    document.getElementById("section4").classList.remove('active');
  }
}
});

// Build menu 

// Scroll to section on link click

// Set sections as active


// page load
window.addEventListener("load", createNav());

