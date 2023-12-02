function videoconanimation() {
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
    left: dets.x-80,
    top: dets.y-80,
  });
});

}

videoconanimation()

function lodinganimation() {
  gsap.from("#page1 h1", {
    y:30,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.3,
  })
  gsap.from("#page1 #video-container", {
    y:30,
    opacity:0,
    delay:1.5,
    duration:0.5,
  })
}

lodinganimation()