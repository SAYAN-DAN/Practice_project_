let identity = document.querySelector("h5");
let button = document.querySelector("button");

let check = 0;
button.addEventListener("click", function () {
  if (check === 0) {
    button.innerHTML = "Friend";
    identity.innerHTML = "Known";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    check = 1;
  } else {
    button.innerHTML = " Add Friend";
    identity.innerHTML = "stranger";
    button.style.backgroundColor = "goldenrod";
    button.style.color = "black";
    check = 0;
  }
});
