//Objects
function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    let readStatus;
    if (haveRead){
        readStatus = 'read';
    }else{
        readStatus = 'not read yet';
    }
    this.info = function(){
        return(`- ${title} by ${author}, ${pages} pages, ${readStatus}.`);
    }
}

//Functions
const restartModal = () => {
    bookAuthor.value = '';
    bookPages.value = '';
    bookTitle.value = '';
}

const restartBooks = (book) => {
    const bookDiv = document.createElement('div');
    bookDiv.textContent = book.info();
    booksContainer.append(bookDiv);
}

const restartBooksContainer = () => {
    booksContainer.innerHTML = '';
    library.forEach(book => {
        restartBooks(book);
    });
}

//Main section
const hobbit = new Book('Hobbit','Tolkien',324,true);
const potter = new Book('Harry Poter','Jk Rowling',533,false);
const lupin = new Book('Arsene Lupin: Gentleman-Cambrioleur','Maurice Leblanc',234,true);
let library = [];

library.push(hobbit);
library.push(potter);
library.push(lupin);

const booksContainer = document.querySelector("#books-container");
const newbookButton = document.querySelector("#newbook-button");


//New book modal
const modal = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close-modal');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const bookRead = document.querySelector('#read');
const addbookButton = document.querySelector('#addbook-button');


library.forEach(book => {
    restartBooks(book);
});

newbookButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    restartModal();
    restartBooksContainer();
});

addbookButton.addEventListener('click', () => {
    const newBook = new Book(bookTitle.value,bookAuthor.value,bookPages.value,bookRead.value);
    library.push(newBook);

    modal.style.display = 'none';
    restartModal();
    restartBooksContainer();
});