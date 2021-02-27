function shoppingList(arrayOfShoppingList) {
  let content = document.querySelector("#content");
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  arrayOfShoppingList.forEach((item) => {
    let liElement = document.createElement("li");
    liElement.innerText = item;
    ulElement.appendChild(liElement);
  });
  console.log(ulElement);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
