function readingList(books) {
  const content = document.querySelector("#content");
  content.innerText = "The Best Book of 2021";
  let ulElement = document.createElement("ul");
  content.appendChild(ulElement);
  books.forEach((book) => {
    const liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    const pElement = document.createElement("p");
    pElement.innerText = `${book.title}-${book.author}`;
    liElement.appendChild(pElement);
    const imageElement = document.createElement("img");
    liElement.appendChild(imageElement);
    imageElement.setAttribute("src", book.src);
    //without using setAttribute
    // imageElement.src= book.src;

    if (book.alreadyRead) {
      liElement.style.backgroundColor = "green";
    } else {
      liElement.style.backgroundColor = "red";
    }
  });
}
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    src: "1.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    src: "2.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    src: "3.jpg",
  },
];

readingList(books);
