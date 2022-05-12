const list = document.querySelector("#categories");
const items = list.children;

console.log(`Number of categories: ${items.length}`);

for (let item of items) {
  const title = item.firstElementChild;
  console.log(`Category : ${title.textContent}`);
  const element = item.lastElementChild.children;
  console.log(`Elements : ${element.length}`);
}


// for (let item of items) {
//   const title = item.querySelector("h2");
//   console.log(`Category : ${title.textContent}`);
//   const element = item.querySelectorAll("li");
//   console.log(`Elements : ${element.length}`);
// }

