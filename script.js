// Creo la mia lista della spesa
const shoppingList = [
  "pane",
  "uova",
  "latte",
  "salumi",
  "carne",
  "pesce",
  "frutta",
  "verdura",
];

// Recupero l elemento html dove voglio "stampare" la mia lista
// const content = document.getElementById("list");
// let listHtml = "<ul>";

// for (let i = 0; i < shoppingList.length; i++) {
//   listHtml += `<li>${shoppingList[i]}</li>`;
// }

// listHtml += "</ul>";
// content.innerHTML = listHtml;

// Replico il tutto utilizzando il "while"

const content = document.getElementById("list");
let listHtml = "<ul>";

let i = 0;
while (i < shoppingList.length) {
  listHtml += `<li>${shoppingList[i]}</li>`;
  i++;
}

listHtml += "</ul>";
content.innerHTML = listHtml;
