const getcolor = function () {
  //Hex Code
  const randomNumber = Math.floor(Math.random() * 16777215);
    // console.log(randomNumber);
  const randomcode = "#" + randomNumber.toString(16);
    // console.log(randomNumber , randomcode);
  document.body.style.backgroundColor = randomcode;
  document.getElementById("randomcolor").innerText = randomcode;
  // nevigator.clipboard.writeText(randomcode)
  navigator.clipboard.writeText(randomcode.toString());
};
// Event call
document.getElementById("button").addEventListener("click", getcolor);

//init call
getcolor();
