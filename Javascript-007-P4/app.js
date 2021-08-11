const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-Left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((className) => {
    className.classList.remove("mole");
  });

  let randomPosition = square[Math.floor.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  // assign the id of the randomPostion to hitPoistion for us to use later
  hitPosition = randomPosition.id;
}
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});
function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(timerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is" + result);
  }
}
let countDownTimerId = setInterval(countDown, 1000);
