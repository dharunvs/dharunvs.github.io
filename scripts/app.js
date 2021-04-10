const navLinks = document.getElementById("nav-links");
const content = document.getElementById("content");
const burger = document.getElementById("burger");
const pages = document.getElementById("pages");

// pages.style.transform = "translateY(-100vh)";

function navAnimate() {
  navLinks.classList.toggle("nav-move");
  content.classList.toggle("content-filter");
  burger.classList.toggle("b-anim");
}

function pageAnimate(page) {
  if (page == "home") {
    pages.style.transform = "translateY(0)";
    cardRemove();
  } else if (page == "work") {
    pages.style.transform = "translateY(-100vh)";
    cardRemove();
    cardAnimate();
  } else if (page == "contact") {
    pages.style.transform = "translateY(-200vh)";
    cardRemove();
  }

  navLinks.classList.toggle("nav-move");
  content.classList.toggle("content-filter");
  burger.classList.toggle("b-anim");
}
