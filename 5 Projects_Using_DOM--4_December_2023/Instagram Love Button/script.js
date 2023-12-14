let box = document.querySelector(".box");
let love = document.querySelector("i");

box.addEventListener("dblclick", function () {
  love.style.transform = "translate(-50%, -50%) scale(1)";
//   love.style.opacity = 0.8;
  setTimeout(function () {
    love.style.transform = "translate(-50%, -50%) scale(0)";
  }, 1000);
});
