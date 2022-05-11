const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const items = ingredients.map(el => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;
  return itemEl
})

const list = document.querySelector("#ingredients");
list.append(...items)

