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
  const headerElement = selectElement("#header");
  if (this.scrollY >= 15) {
    headerElement.classlist.add("activated");
  } else {
    headerElement.classlist.remove("activated");
  }
};
window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up

const menuToggleIcon = selectElement("menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = selectElement("#menu");
  mobileMenu.classlist.toggle("activated");
  menuToggleIcon.classlist.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup

const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const serchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener("click", () =>
  searchFormContainer.classlist.add("activated")
);
formCloseBtn.addEventListener("click", () =>
  searchFormContainer.classlist.remove("activated")
);

// -- Close the search form popup on ESC keypress
window.addEventListener("keyup", (event) => {
  if (event.key === "Escape") searchFormContainer.classlist.remove("activated");
});

// Switch theme/add to local storage

const bodyElement = document.body;
const themeToggleBtn = selectElement("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

// Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body

// Add light theme on click

// If the body has the class of light theme then add it to local Storage, if not remove it

// Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".wiper-pagination",
  },
  breakkpoints: {
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
// How many slides to show

// How much space between slides

// Make the next and previous buttons work

// Make the pagination indicators work

//Responsive breakpoints for how many slides to show at that view

// 700px and up shoes 2 slides

// 1200px and up shoes 3 slides
