const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-Left");
let score = document.querySelector("#score");

let result = 0;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  // assign the id of the randomPostion to hitPoistion for us to use later
  hitPosition = randomPosition.id;
}
square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
    }
  });
});
