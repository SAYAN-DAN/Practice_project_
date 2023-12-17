let main = document.querySelector(".main");
let box = document.querySelectorAll(".box");

box.forEach(function (val) {
  let boxImage = val.querySelector("img");

  val.addEventListener("mouseenter", function () {
    // console.log("hllo");
    gsap.to(boxImage, {
      scale: 1,
    });
  });

  val.addEventListener("mouseleave", function () {
    // console.log("hllo");
    gsap.to(boxImage, {
      scale: 0,
    });
  });

  val.addEventListener("mousemove", function (move) {
    // console.log("hllo");
    gsap.to(boxImage, {
      left: move.x - val.offsetLeft, // Adjust for the box's position
      top: move.y - val.offsetTop, // Adjust for the box's position
    });
  });
});
