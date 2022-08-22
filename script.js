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
        const read = document.createElement("button");
        read.setAttribute("data-read", myLibrary[i].read);
        read.book = myLibrary[i];
        if(read.getAttribute("data-read") == "true") {
            read.classList.add("read");
        } else {
            read.classList.add("notRead");
        }
        read.addEventListener("click", existingToggleRead);
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


// event handlers
function showAddBookForm() {
    const addBookForm = document.getElementById("addBookForm");
    addBookForm.style.display = "flex";
}

function closeAddBookForm() {
    const addBookForm = document.getElementById("addBookForm");
    addBookForm.style.display = "none";
}

function toggleRead() {
    const currentState = this.getAttribute("data-read");

    if(currentState == "false") {
        this.classList.add("read");
        this.classList.remove("notRead");
        this.setAttribute("data-read", "true");
    } else {
        this.classList.remove("read");
        this.classList.add("notRead");
        this.setAttribute("data-read", "false");
    }
}

function existingToggleRead() {
    toggleRead.call(this);
    this.book.read = this.getAttribute('data-read');
}

function submitAddBookForm() {
    const addBookForm = document.getElementById("addBookForm");
    const valid = addBookForm.checkValidity();
    if(valid) {
        //validate that book is new
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pageCount = document.getElementById("pageCount").value;
        const read = document.getElementById("toggleRead").getAttribute("data-read");
        const newBook = new Book(title, author, pageCount, read);
        addBookToLibrary(newBook)
        clearAddBookForm();
        closeAddBookForm();
    }
}

function clearAddBookForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pageCount").value = "";
    if(document.getElementById("toggleRead").getAttribute("data-read") == "true") {
        toggleRead.call(document.getElementById("toggleRead"));
    }
}


// attaching event listeners to all the buttons
const addBookButton = document.getElementById("addBookButton");
addBookButton.addEventListener("click", showAddBookForm);

const closeFormButton = document.getElementById("closeAddBookForm");
closeFormButton.addEventListener("click", closeAddBookForm);

const toggleReadButton = document.getElementById("toggleRead");
toggleReadButton.addEventListener("click", toggleRead);

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitAddBookForm);


// some sample data to see the layout
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 304, true);
addBookToLibrary(hobbit);

const fellowship = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 356, true);
addBookToLibrary(fellowship);

const twoTowers = new Book("The Two Towers", "J.R.R. Tolkien", 334, false);
addBookToLibrary(twoTowers);

const rotk = new Book("The Return of the King", "J.R.R. Tolkien", 409, false);
addBookToLibrary(rotk);