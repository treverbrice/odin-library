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
    myLibrary.push(book)
}