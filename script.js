let myLibrary = [];

function Book(title, author, pageCount, read) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.info = function() {
        hasRead = "";
        if(read) {
            hasRead = "has been read";
        } else {
            hasRead = "not read yet";
        }
        information = `${title} by ${author}, ${pageCount} pages, ${hasRead}`;
        return(information);
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateDisplay();
}

function updateDisplay() {
    clearDisplay();
    const shelf = document.querySelector("#shelf");
    for (let i = 0; i < myLibrary.length; i++) {
        const newBook = document.createElement("div");
        newBook.classList.add("card");
        const title = document.createElement("div");
        title.innerText = myLibrary[i].title;
        const author = document.createElement("div");
        author.innerText = myLibrary[i].author;
        const pageCount = document.createElement("div");
        pageCount.innerText = myLibrary[i].pageCount;
        const read = document.createElement("div");
        read.innerText = myLibrary[i].read;
        newBook.appendChild(title);
        newBook.appendChild(author);
        newBook.appendChild(pageCount);
        newBook.appendChild(read);
        shelf.appendChild(newBook);
    }
}

function clearDisplay() {
    const shelf = document.querySelector("#shelf");
    while (shelf.firstChild) {
      shelf.removeChild(shelf.firstChild);
    }
}

function showAddBookForm() {
    addBookForm = document.getElementById("addBookForm");
    addBookForm.style.display = "block";
}

const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", showAddBookForm);

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 304, true);
addBookToLibrary(hobbit);

const fellowship = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 356, true);
addBookToLibrary(fellowship);

const twoTowers = new Book("The Two Towers", "J.R.R. Tolkien", 334, false);
addBookToLibrary(twoTowers);

const rotk = new Book("The Return of the King", "J.R.R. Tolkien", 409, false);
addBookToLibrary(rotk);