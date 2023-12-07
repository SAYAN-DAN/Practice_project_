var timer = 60;
var score = 0;
var clickmath = 0;

function makeBubble() {
  var circle = "";
  for (let i = 1; i <= 152; i++) {
    var math = Math.floor(Math.random() * 10);
    circle += ` <div id="bubble">${math}</div>`;
  }

  document.querySelector("#pbtn").innerHTML = circle;
}
makeBubble();

function getNewHit() {
  clickmath = Math.floor(Math.random() * 10);
  document.querySelector("#Hitval").textContent = clickmath;
}
getNewHit();

function runtime() {
  var timeint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#Timeval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector(
        "#pbtn"
      ).innerHTML = `<h1>Gamr Over <br/><br/> play Again</h1>`;
    }
  }, 1000);
}
runtime();

function scoreBox() {
  score += 10;
  document.querySelector("#Scoreval").textContent = score;
}
// scoreBox()

document.querySelector("#pbtn").addEventListener("click", function (dets) {
  var clicknum = Number(dets.target.textContent);
  if (clicknum === clickmath) {
    scoreBox();
    makeBubble();
    getNewHit();
  }
});
