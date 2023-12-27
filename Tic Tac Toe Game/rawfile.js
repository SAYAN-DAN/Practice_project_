
// let gameover = new Audio("./SoundContainer/gameover.mp3");
// let music = new Audio("./SoundContainer/music.mp3");
// let Audioturn = new Audio("./SoundContainer/ting.mp3");

// let turn = "x";

// // to Change the turn
// const changeTurn = function () {
//   return turn === "x" ? "0" : "x";
// };

// // function to check for a win
// function checkWin() {
//   // Implement your logic for checking win conditions
// }

// // Game logic starts here

// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach(function (element) {
//   let boxtext = element.querySelector(".boxtext");
//   element.addEventListener("click", function () {
//     if (boxtext.innerText === "") {
//       boxtext.innerText = turn;
//       turn = changeTurn();
//       Audioturn.play();
//       checkWin();
//       document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
//     }
//   });
// });

// **********************************************************************************

// let gameover = new Audio("./SoundContainer/gameover.mp3");
// let music = new Audio("./SoundContainer/music.mp3");
// // let Audioturn = new Audio("./SoundContainer/ting.mp3");

// let turn = "x";

// //to Change the turn
// const changeTurn = function () {
//   return turn === "x" ? "0" : "x";
// };

// // function to check for a win

// function checkwin() {}

// //Game logic is start here

// let boxes = document.querySelectorAll(".box");
// Array.from(boxes).forEach(function (element) {
//   let boxtext = element.querySelector(".boxtext");
//   element.addEventListener("click", function () {
//     if (boxtext.innerText === "") {
//       boxtext.innerText = turn;
//       turn = changeTurn();
//       Audioturn.play();
//       checkwin();
//       document.querySelector(".info")[0].innerText = "Turn for" + turn;
//     }
//   });
// });