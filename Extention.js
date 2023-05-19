const changeColorButton = document.getElementById("changeColorButton");
const body = document.querySelector("body");

changeColorButton.addEventListener("click", () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  body.style.backgroundColor = "#" + randomColor;
});
