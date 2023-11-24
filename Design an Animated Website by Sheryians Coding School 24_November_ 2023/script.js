var Videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");

Videocon.addEventListener("mouseenter", function () {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
  });
});

Videocon.addEventListener("mouseleave", function () {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0,
  });
});

Videocon.addEventListener("mousemove", function (dets) {
  gsap.to(playbtn, {
    left: dets.x,
    top: dets.y,
  });
});
