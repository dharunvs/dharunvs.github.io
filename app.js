const navLinks = document.getElementById("nav-links");
const content = document.getElementById("content");
const burger = document.getElementById("burger");

navAnimate = () => {
  navLinks.classList.toggle("nav-move");
  content.classList.toggle("content-filter");
  burger.classList.toggle("b-anim");
};

pageAnimate = (page) => {
  const pages = document.getElementById('pages')
  if (page == 'home'){
    pages.style.transform = 'translateY(0)'
  } else if (page == 'work'){
    pages.style.transform = 'translateY(-100vh)'
  } else if (page == 'about'){
    pages.style.transform = 'translateY(-200vh)'
  }

  navLinks.classList.toggle("nav-move");
  content.classList.toggle("content-filter");
  burger.classList.toggle("b-anim");
  
}