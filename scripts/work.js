let cards = document.querySelectorAll(".card");

function cardAnimate() {
  for (j in cards) {
    cards[j].classList.add("card-anim");
    const time = 400;
    const timeString = j * time + time;
    if (j == 0) {
      cards[j].style.animationDelay = 600 + "ms";
    } else {
      cards[j].style.animationDelay = timeString + "ms";
    }
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
