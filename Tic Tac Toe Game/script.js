


let gameover = new Audio("./SoundContainer/gameover.mp3");
let music = new Audio("./SoundContainer/music.mp3");
// let Audioturn = new Audio("./SoundContainer/ting.mp3");

let turn = "x";

// to Change the turn
const changeTurn = function () {
  return turn === "x" ? "0" : "x";
};

// function to check for a win
function checkwin() {
  
}

// Game logic is starting here

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(function (element) {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", function () {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      // Audioturn.play(); // Uncomment this if you want to play audio
      checkwin();
      document.querySelector(".info").innerText = "Turn for " + turn; // Corrected this line
    }
  });
});
