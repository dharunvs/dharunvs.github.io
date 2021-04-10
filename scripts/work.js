let cards = document.querySelectorAll(".card");

function cardAnimate() {
  for (j in cards) {
    cards[j].classList.add("card-anim");
    const timeString = (j + 1) * 40;
    cards[j].style.animationDelay = timeString + "ms";
    // console.log(timeString);
    console.log(j, timeString);
    if (j == 5) {
      break;
    }
  }
}

function cardRemove() {
  for (j in cards) {
    cards[j].classList.remove("card-anim");
    if (j == 5) {
      break;
    }
  }
}
