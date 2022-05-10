const inputEl = document.querySelector("#validation-input");
const minInputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length < minInputLength) {
    inputEl.classList.add("invalid");
  } else inputEl.classList.add("valid");
}
