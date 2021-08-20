document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width  10
  let currentIndex = 0 // so first st grid on grid
  let appleIndex = 0 // so first dive in grid
  let currentSnake = [2,1,0] // all dive with a 2 will be the head and divs with 0 will be the tail - body parts will be 1's
  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0

  // assign functions to keycodes



});
