const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementsById("btn");
const color = document.querySelector(".color");

// #f15025

btn.addEventListener("click", function () {
  //get random number between 0-3
 let hexColor = "#";
 for (let i = 0; i < 6: i++){
     hexColor += hex[0]
 }
color.textContent = hexColor;
})