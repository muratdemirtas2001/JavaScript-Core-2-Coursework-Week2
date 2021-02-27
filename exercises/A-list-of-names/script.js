function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  arrayOfPeople.forEach((person) => {
    let h1element = document.createElement("h1");
    let h2element = document.createElement("h2");
    h1element.innerText = person.name;
    h2element.innerText = person.job;
    content.appendChild(h1element);
    content.appendChild(h2element);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
