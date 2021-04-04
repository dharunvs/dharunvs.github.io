navAnimate = () => {
  const navLinks = document.getElementById("nav-links");
  const content = document.getElementById("content");
  const burger = document.getElementById("burger");

  navLinks.classList.toggle("nav-move");
  content.classList.toggle("content-filter");
  burger.classList.toggle("b-anim");
};
