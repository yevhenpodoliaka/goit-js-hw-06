const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = document.querySelector("#value");
counterValue.textContent = 0; 

btnDecrement.addEventListener("click", onDecrementBtn);
btnIncrement.addEventListener("click", onIncrementBtn);


function onDecrementBtn() {
  
      counterValue.textContent = Number(counterValue.textContent) - 1;
}
function onIncrementBtn() {
    
      counterValue.textContent = Number(counterValue.textContent) + 1;
};

