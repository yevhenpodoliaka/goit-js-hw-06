const inputEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeFont);

 spanEl.style.fontSize = `${inputEl.value}px`;
function onChangeFont(event) {
  spanEl.style.fontSize = `${event.currentTarget.value}px`;
}
