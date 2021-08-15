document.addEventListener("DOMCom=ntentLoaded", () => {
  const squares = document.querySelectorAll(".grid div");
  const result = document.querySelector("result");
  const displayCurrentPlayer = document.querySelector("current-player");
  let displayCurrentPlayer = 1;

  for (var i = 0, len = square.length; i < len; i++)
    (function (index) {
      // add and onclick to each sqauer in grid
      squares[i].onclick = function () {
        // comment - if sqaure below is taken then you can go ontop
        if (squares[index + 7].classList.contains("taken")) {
          if (currentPlayer === 1) {
            squares[index].classList.addEventListener("taken");
            squares[index].classList.addEventListener("player-one");
            //change the player
            currentPlayer = 2;
            displayCurrentPlayer.innerHTML = currrentPlayer;
          } else if (currentPlayer === 2) {
            squares[index].classList.add("taken");
            squares[index].classList.add("player-two");
            //chnage the player
            currentPlayer = 1;
            displayCurrentPlayer.innerHTML = currentPlayer;
          }
          // if the square below your current square is not taken, you can't go here
        } else alert("can't go here");
      };
    });
  i;
});
