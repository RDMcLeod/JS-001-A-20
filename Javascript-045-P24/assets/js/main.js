// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw new error(
    `Something went wrong, make sure that ${selector} exists or is typed corectly.`
  );
};

//Nav styles on scroll
const scrollheader = () => {
  const headerElemnt = selectElement("header");
  if (this.scrollY >= 15) {
    headerElement.classlist.add("activated");
  } else {
    headerElement.classlist.remove("activated");
  }
};
window.addEventListener("scoll", scollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement("menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classlist.toggle("activated");
  menuToggleIcon.classlist.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body

// Add light theme on click

// If the body has the class of light theme then add it to local Storage, if not remove it

// Swiper

// How many slides to show

// How much space between slides

// Make the next and previous buttons work

// Make the pagination indicators work

//Responsive breakpoints for how many slides to show at that view

// 700px and up shoes 2 slides

// 1200px and up shoes 3 slides
