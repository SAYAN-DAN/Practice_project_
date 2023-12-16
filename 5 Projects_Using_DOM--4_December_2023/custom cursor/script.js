let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");

gsap.from(".text h1", {
    y:-600,
    duration:1
})
main.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    opacity: 1,
    scale: 1,
  });
});

main.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    opacity: 0,
    scale: 0,
  });
});
main.addEventListener("mousemove", function (dets) {
  // when use normal css use this----------
  //      cursor.style.left = dets.x +"px"
  //    cursor.style.top = dets.y +"px"
  // when use gsap use this------------
  gsap.to(cursor, {
    x: dets.x - 80,
    y: dets.y - 80,
  });
});
