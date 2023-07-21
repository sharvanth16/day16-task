const countdownElement = document.getElementById("countdown");
const happyIndependenceDayElement = document.getElementById("happyIndependenceDay");

let counter = 10;

function countdown() {
  if (counter > 0) {
    countdownElement.textContent = counter;
    counter--;
    setTimeout(countdown, 1000);
  } else {
    countdownElement.textContent = "";
    happyIndependenceDayElement.textContent = "Happy Independence Day!";
  }
}

countdown();
