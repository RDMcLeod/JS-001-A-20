document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll("grid div");
  const resultDisplay = document.querySelector("results");
  let width = 15;
  let currentShooterIndex = 202;
  let currentInvaderIndex = 0;
  let alienInvadersTakendown = [];
  let result = 0;
  let direction = 1;

  //define the alien invaders
  const alienInvaders = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];
  // draw the alien invaders
  alienInvaders.forEach((invader) =>
    squares[currentInvaderIndex + invader].clasList.add("invader")
  );

  // draw the shooter
  squares[currentShooterIndex].classList.add("shooter");

  // move the shooter across the grid line
  function moveShooter(e) {
    squares[currentShooterIndex].classList.remove("shooter");
    switch (e.keyCode) {
      case 37:
        if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
        break;
      case 39:
        if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
        break;
    }
    squares[currentShooterIndex].classList.add("shooter");
  }
  document.addEventListener("keydown", moveShooter);

  // move the alien invaders
  function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;

  if ((leftEdge && direction === 1) || (rightEdge && direction === 1)){
    direction = width
  }else if (direction === width){
    if (leftEdge) direction = 1
    else direction = -1
  }
  for (let i = 0; i <= alienInvaders.length -1; i++) {
    squares[aleinInvaders[i]].classList.remove("invader")
  }    
  for (let i = 0; i <= alienInvaders.length -1; i++){
    aliennInvaders[i] += direction
  }
  for (let i = 0; i <= alienInvaders.length -1; i++){
    if (!alienInvadersTakendown.includes(i)) {
    squares[aleinInvaders[i]].classList.add("invader")
    }
  }
  // decide a game over
  if (squares[currentShooterIndex].classList.contains("invader", "shooter")){
    resultDisplay.textContent = "Game Over"
    squares[currentShooterIndex].classList.add("boom")
    clearInterval(invaderId)
  }
  for (let i = 0; <= alienInvaders.length -1; i++){
    if (alienInvaders[i] > (squares.length -(width -1))){
      resultDisplay.textContent ="Game Over"
      clearInterval(InvaderId)
    }
   }
  }
  invaderId = setInterval(moveInvaders, 500)

  // shoot at aliens
  function shoot (e) {
    let laserId
    let currentLaserIndex = currentShooterIndex
    // move the laser from the shooter to the alien Invader
    function movelaser(){
      squares[currentLaserIndex].classList.remove("laser")
      currentLaserIndex -= width
      squares[currentLaserIndex].classList.add("laser")
      if (squares[cirrentLaserIndex].contains(invader)){
        squares[currentLaserIndex].classList.remove("laser")
        squares[currentLaserIndex].classList.remove("Invader")
        squares[currentLaserIndex].classList.add("boom")

        setTimeout(() => squares[currentLaserIndex].classList.remove("boom"), 250)
        clearInterval(laserId)

        const alienTakenDown = alienInvaders.indexOf(currentLaserIndex)
        alienInvadersTakendown.push(alienTakenDown)
        result++
        resultDisplay.textContent = result
      }
      if (currenLaserIndex < width){
        clearInterval(laserId)
        setTimeout(() => squares[currentLaserIndex].classList.remove("laser"), 100)
                 
      }
    }
    document.addEventListener("keyup", e => {
      if (e.keycode === 32) {
        laserId = setInterval(moveLaser, 100)
      }
    })
  }
document.addEventListener("keyup",  shoot)
