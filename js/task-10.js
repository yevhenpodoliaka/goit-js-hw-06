const inputEl = document.querySelector("#controls > input");
const boxesEl = document.querySelector("#boxes");
const btnCreate = document.querySelector("[data-create]");
const btnDestory = document.querySelector("[data-destroy]");

inputEl.addEventListener("input", null);
btnCreate.addEventListener("click", makeBox);
btnDestory.addEventListener("click", clearAll);

function makeBox() {
  createBoxes(inputEl.value); 
}

function createBoxes(amount) {
  let size = 30;
  const array = [];
  for (let i = 0; i < amount; i += 1) {
    const item = document.createElement("div");
    size += 10;
    item.style.width = `${size}px`;
    item.style.height = ` ${size}px`;
    item.style.backgroundColor = getRandomHexColor();

    array.push(item);
  }
  boxesEl.append(...array);
}
function clearAll() {
  boxesEl.innerHTML = "";
  inputEl.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


