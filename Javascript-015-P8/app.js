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

function moveFrog (e {
    squares[currentIndex].classList.remove("frog")
    switch (e.keycode) {
        case 37:
        if(currentIndex % width !== 0 currentIndex -=1)
    }
})