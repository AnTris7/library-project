let myLibrary = [];

function Book(name, author, pages, readStatus) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.changeStatus = function () {
  if (this.readStatus === true) {
    this.readStatus = false;
  } else {
    this.readStatus = true;
  }
};

// book form

const bookForm = document.querySelector("#book-form");
const bookName = document.querySelector("#book-name");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookStatus = document.querySelector("#yes-read");
const overlay = document.querySelector(".bg-overlay");
const closePopup = document.querySelector(".close");
const addBookBtn = document.querySelector("#add-book-btn");
const addNewBookBtn = document.querySelector("#new-book-btn");

localStorage.setItem("books", JSON.stringify(myLibrary));

const booksString = localStorage.getItem("myLibrary");
const books = JSON.parse(booksString);

addBookBtn.addEventListener("click", addBook);
addNewBookBtn.addEventListener("click", function () {
  bookForm.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closePopup.addEventListener("click", function () {
  bookForm.classList.add("hidden");
  overlay.classList.add("hidden");
});

function addBook() {
  if (!bookName.value || !bookAuthor.value || !bookPages.value) {
    return;
  } else {
    bookForm.classList.add("hidden");
    overlay.classList.add("hidden");

    let newBook = new Book(
      bookName.value,
      bookAuthor.value,
      bookPages.value,
      bookStatus.checked
    );
    myLibrary.push(newBook);
    bookForm.reset();

    createBookCard(newBook);
  }
}

// create Book Card

function createBookCard(book) {
  const container = document.querySelector(".container");
  const bookCard = document.createElement("div");
  const bookCardTitle = document.createElement("div");
  const bookCardAuthor = document.createElement("div");
  const bookCardPages = document.createElement("div");
  const bookCardStatus = document.createElement("div");
  const bookCardDelete = document.createElement("button");
  const bookCardUpdateBtn = document.createElement("button");
  //book card
  bookCard.classList.add("book-card");
  container.appendChild(bookCard);
  bookCardTitle.classList.add("book-title");

  //title
  bookCardTitle.textContent = book.name;
  bookCard.appendChild(bookCardTitle);

  //author
  bookCardAuthor.textContent = `by ${book.author}`;
  bookCard.appendChild(bookCardAuthor);

  //pages
  bookCardPages.textContent = `${book.pages} pages`;
  bookCard.appendChild(bookCardPages);

  // read status
  if (book.readStatus === true) {
    bookCardStatus.textContent = "✅ read";
    bookCard.appendChild(bookCardStatus);
  } else {
    bookCardStatus.textContent = "❌ not read";
    bookCard.appendChild(bookCardStatus);
  }

  // update read status
  bookCardUpdateBtn.classList.add("book-card-btn-update");
  bookCardUpdateBtn.textContent = "Update";
  bookCard.appendChild(bookCardUpdateBtn);

  bookCardUpdateBtn.addEventListener("click", function () {
    book.changeStatus();
    if (book.readStatus === true) {
      bookCardStatus.textContent = "✅ read";
    } else {
      bookCardStatus.textContent = "❌ not read";
    }
  });

  // delete
  bookCardDelete.classList.add("book-card-btn-remove");
  bookCardDelete.textContent = "Remove";
  bookCard.appendChild(bookCardDelete);

  bookCardDelete.addEventListener("click", function (e) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    e.target.parentNode.remove();
  });
}

//local storage

localStorage.setItem("name", JSON.stringify);
JSON.parse(localStorage.getItem(obj));
