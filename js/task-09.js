const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}