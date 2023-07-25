/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 480) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.querySelector(".nav");
  const header = document.querySelector(".header");
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  //When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-nav");
    header.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-nav");
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*==================== TOGGLE MENU MOBILE ====================*/
const navMenu = document.querySelector(".nav-menu-mobile");

function toggleMenu() {
  navMenu.classList.toggle("toggle-nmm");
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nml");

function linkAction() {
  const navMenu = document.querySelector(".nav-menu-mobile");
  // When we click on each nav__link, we remove the toggle-nav-menu class
  navMenu.classList.remove("toggle-nmm");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== TOGGLE MENU ====================*/
// Get all sidebar elements and containers
const sidebarlink = document.querySelectorAll(".sn");
const containers = document.querySelectorAll(".ltc");

// Add a click event listener to each sidebar element
sidebarlink.forEach((element, index) => {
  element.addEventListener("click", () => {
    // Remove active class from all sidebar link
    sidebarlink.forEach((el) => {
      el.classList.remove("active");
    });
    // Add active class to the clicked sidebar element
    element.classList.add("active");

    // Remove active class from all containers
    containers.forEach((container) => {
      container.classList.remove("active");
    });
    // Add active class to the container with the same index as the clicked sidebar element
    containers[index].classList.add("active");
  });
});

/* ------------- TOGGLE EVENTS ------------- */
const oList = document.querySelectorAll(".otl");
const tQuery = document.querySelector(".track-query");
const closeTquery = document.querySelector(".close-tq");

// Add a click event listener to each sidebar element
oList.forEach((element) => {
  element.addEventListener("click", () => {
    tQuery.classList.add("active");
  });
});

closeTquery.addEventListener("click", () => {
  tQuery.classList.remove("active");
});
