let cards = document.querySelectorAll(".card");

function cardAnimate() {
  for (j in cards) {
    cards[j].classList.add("card-anim");
    timeString = (j + 1) * 100;
    cards[j].style.animationDelay = timeString + "ms";
    // console.log(timeString);
    console.log(j, timeString);
    if (j == 5) {
      break;
    }
  }
}
