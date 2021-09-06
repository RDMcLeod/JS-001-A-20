document.addEventListener("DOMContentLoaded", () => {});
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");
const timeLeft = document.querySelector("#time-left");
const result = document.querySelector("#result");
const startBtn = document.querySelector("#button");
const width = 9;
let currentIndex = 76;
let currentTime = 20;
let timerId;

//render frog on starting block
squares[currentIndex].classList.add("frog")

// moving the frog

function moveFrog (e) {
    squares[currentIndex].classList.remove("frog")
    switch (e.keycode) {
        case 37:
        if(currentIndex % width !== 0) currentIndex -=1
        break
        case 38:
        if(currentIndex - width >= 0) currentIndex -= width
        break
        case 39:
        if(currentIndex % width < width -1) currentIndex += 1
        break
        case 40:
        if(currentIndex + width < width*width) currentIndex += width
        break
    }
    squares[currentIndex].classList.add('frog')
    lose()
    win()
})

// move cars
function autoMoveCars () {
  carsLeft.forEach(carLeft => moveCarLeft(carLeft))
  carsRight.forEach(carRight => moveCarRight (carRight))  
}
//move car left on time loop

function moveCarLeft (carLeft) {
  switch (true) {
      case carLeft.classList.contains("c1"):
       carLeft.classList.remove("c1")
       carsLeft.classList.add("c2")
       break
      case carLeft.classList.contains("c2"):
       carLeft.classList.remove("c2")
       carsLeft.classList.add("c3")
       break
      case carLeft.classList.contains("c3"):
       carLeft.classList.remove("c3")
       carsLeft.classList.add("c1")
       break
  }
}
// move the car right on the time loop
function moveCarRight (carRight) {
  switch (true) {
      case carRight.classList.contains("c1"):
       carRight.classList.remove("c1")
       carRight.classList.add("c3")
       break
      case carRight.classList.contains("c2"):
       carRight.classList.remove("c2")
       carRight.classList.add("c1")
       break
      case carRight.classList.contains("c3"):
       carRight.classList.remove("c3")
       carRight.classList.add("c2")
       break
  }
}
// move the logs
function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
  }