function listOfColours(colours) {
  let content = document.querySelector("#content");
  let selectElement = document.createElement("select");
  content.appendChild(selectElement);
  let pElement = document.createElement("p");
  pElement.style.fontSize = "30px";
  content.appendChild(pElement);
  colours.forEach((color) => {
    let colorElement = document.createElement("option");
    colorElement.innerText = color;
    selectElement.appendChild(colorElement);
  });
  selectElement.addEventListener("change", (event) => {
    pElement.style.color = event.target.value;
    pElement.innerText = `Hello you chose ${event.target.value} color`;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
