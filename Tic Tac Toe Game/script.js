let gameover = new Audio("./SoundContainer/gameover.mp3");
let music = new Audio("./SoundContainer/music.mp3");
let Audioturn = new Audio("./SoundContainer/ting.mp3");

let turn = "x";
let gameover1 = false;
let reset = document.querySelector(".reset");
// to Change the turn
const changeTurn = function () {
  return turn === "x" ? "0" : "x";
};

// function to check for a win
function checkwin() {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
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
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.opacity = 1;
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(
        ".line"
      ).style.width = "20vw";
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
      Audioturn.play();
      checkwin();
      if (!gameover1) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

// when click reset button remove all text

reset.addEventListener("click", function () {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach(function (element) {
    element.innerText = "";
    let turn = "x";
    gameover1 = false;
    document.querySelector(
      ".line"
    ).style.width = "0vw";
    document.querySelector(".info").innerText = "Turn for " + turn;
    document
      .querySelector(".imgbox")
      .getElementsByTagName("img")[0].style.opacity = 0;
  });
});
