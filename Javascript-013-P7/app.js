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
      case "37":
        if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
        break;
      case "39":
        if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
        break;
    }
  }
});
