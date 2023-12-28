let gameover = new Audio("./SoundContainer/gameover.mp3");
let music = new Audio("./SoundContainer/music.mp3");
// let Audioturn = new Audio("./SoundContainer/ting.mp3");

let turn = "x";
let gameover1 = false;
let reset = document.querySelector(".reset")
// to Change the turn
const changeTurn = function () {
  return turn === "x" ? "0" : "x";
};

// function to check for a win
function checkwin() {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  

  wins.forEach(function (e) {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + "won";
      gameover1 = true;
      document.querySelector(".imgbox").getElementsByTagName("img")[0].style.opacity = 1
    }
  });
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
      if (!gameover1) {
        document.querySelector(".info").innerText = "Turn for " + turn; 
      }
    }
  });
});

// when click reset button remove all text

reset.addEventListener("click", function() {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach(function(element) {
    element.innerText = ""
    let turn = "x";
    gameover1 = false
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.opacity = 0
  })
})
