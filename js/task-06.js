const inputEl = document.querySelector("#validation-input");
const minInputLength = inputEl.dataset.length;

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("focus", defoltStyle);
function defoltStyle() {
      inputEl.classList.remove("invalid");
      inputEl.classList.remove("valid");
    
}

function onInputBlur(event) {
  if (event.currentTarget.value.length < minInputLength) {
      inputEl.classList.add("invalid");
      alert(`Ведіть не менше ${minInputLength} символів`);
  } else inputEl.classList.add("valid");
}


