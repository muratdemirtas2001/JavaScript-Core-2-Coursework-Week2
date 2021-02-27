document.getElementById("blueBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".buttons  .btn-primary").style.backgroundColor =
    "#ffa500";
  document.querySelector(".buttons  .btn-secondary").style.backgroundColor =
    "black";
  document.querySelector(".buttons  .btn-secondary").style.color = "white";
});

document.getElementById("orangeBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".buttons  .btn-primary").style.backgroundColor =
    "#5751fd";
  document.querySelector(".buttons  .btn-secondary").style.backgroundColor =
    "#31b0d5";
  document.querySelector(".buttons  .btn-secondary").style.color = "white";
});

document.getElementById("greenBtn").addEventListener("click", () => {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".buttons  .btn-primary").style.backgroundColor =
    "black";
  document.querySelector(".buttons  .btn-secondary").style.backgroundColor =
    "#8c9c08";
});
let emailInput = document.getElementById("exampleInputEmail1");
let nameInput = document.getElementById("example-text-input");
let textAreaInput = document.getElementById("exampleTextarea");
let submitButton = document.querySelector("form .btn-primary");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const isInvalidEmail =
    emailInput.value.length < 1 || !emailInput.value.includes("@");
  const isInvalidName = nameInput.value.length < 1;
  const isInvalidText = textAreaInput.value.length < 1;
  if (isInvalidEmail) {
    alert("please enter a valid email");
    emailInput.style.backgroundColor = "red";
    emailInput.addEventListener("input", () => {
      if (emailInput.value.includes("@")) {
        emailInput.style.backgroundColor = "transparent";
      }
    });
  }

  if (isInvalidName) {
    alert("please enter a valid name");
    nameInput.style.backgroundColor = "red";
    nameInput.addEventListener("input", () => {
      nameInput.style.backgroundColor = "transparent";
    });
  }
  if (isInvalidText) {
    textAreaInput.style.backgroundColor = "red";
    textAreaInput.addEventListener("input", () => {
      textAreaInput.style.backgroundColor = "transparent";
    });
  }

  if (!(isInvalidText || isInvalidName || isInvalidEmail)) {
    emailInput.value = "";
    nameInput.value = "";
    textAreaInput.value = "";
    alert("Thank you for registering with us");
  }
});
