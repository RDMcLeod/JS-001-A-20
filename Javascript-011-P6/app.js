document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("grid div");
  const scoreDisplay = document.querySelector("span");
  const startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0; // so first st grid on grid
  let appleIndex = 0; // so first dive in grid
  let currentSnake = [2, 1, 0]; // all dive with a 2 will be the head and divs with 0 will be the tail - body parts will be 1's
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  // to start game and restart game
  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    randomApple();
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 0;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  //function that deals with al the outcomes of the snake
  function moveOutcomes() {
    // deals with snake  hitting border and snake hitting self
    if (
      (currentSnake[0] + width >= width * width && direction === width) || //if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || //if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || //if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || //if snake hits the top
      squares[currentSnake[0] + direction].classList.contains("snake") //if snake goes into itself
    ) {
      return clearInterval(interval); //this will clear the interval if any of the above happen
    }
    const tail = currentSnake.pop(); // removes last part of array and shows it
    squares[tail].classList.remove("snake"); // removes class of sanke from the tail
    currentSnake.unshift(currentSnake[0] + direction); // gives direction to head of array

    // deals with snake getting apple
    if (squares[currentSnake[0]].classList.contains("apple")) {
      squares[currentSnake[0]].classList.remove("apple");
      squares[tail].classList.add("snake");
      currentSnake.push(tail);
      randomApple();
      score++;
      scoreDisplay.textContent = score;
      clearInterval(interval);
      intervalTime = intervalTime * speed;
      interval = setInterval(moveOutcomes, intervalTime);
    }
    squares[currentSnake[0]].classList.add("snake");
  }

  // generate new apple once apple is eaten
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.comtains("snake"));
    squares[appleIndex].classList.add("apple");
  }

  // assign functions to keycodes
  function control(e) {
    squares[currentIndex].classList.remove("snake"); //removing the class of snake

    if (e.keyCode === 39) {
      direction = 1; // if we pres the right arrow key on keyboard, the snake wil go right
    } else if ((e.keyCode = 38)) {
      direction = -width; // if we press the up arrow the snake will go back 10 divs appaearing to go up
    } else if (e.keyCode === 37) {
      direction = -1; // if we press left the snake will go left 1 div
    } else if (e.keyCode === 40) {
      direction = +width; //
    }
  }

  document.addEventListener("keyup", control);
  startBtn.addEventListener("click", startGame);
});
