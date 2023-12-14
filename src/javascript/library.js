import Book from "./book"
import webFormAddBook from "./htmlMixins/webFormAddBook";

class Library {
    #library = [];
    #shelf = document.querySelector('.shelf')

    #books = [
        new Book("Don Quixote", "Miguel De Cervantes", "952", false),
        new Book("Napoleon's buttons", "Penny Le Couteur & Jay Burreson", 375, false),
        new Book("What is Mathematics?", "Richard Courant and Herbert Robbins", 566, false),
        new Book("Age of Extremes", "Eric Hobsbawn", 627, false),
    ]
    constructor() {
        Object.assign(Library.prototype, webFormRemoveBook);

        for (const book of this.#books) {
            this.#addBookToLibrary(book);
        }
        this.#drawLibrary();

        webFormAddBook.htmlMixin.getAddBookButton().addEventListener('click', this.#addBook.bind(this));

        this.formRemoveBookButton().addEventListener('click', this.#removeBook.bind(this));

        let readStateButtons = document.querySelectorAll('.read-state');
        readStateButtons.forEach(button => {
            this.#toggleBookReadState(button);
        })
    }

    get library() {
        return this.#library
    }

    #addBook() {
        const bookObject = new Book(
            webFormAddBook.htmlMixin.getInputBookTitle().value,
            webFormAddBook.htmlMixin.getInputBookAuthors().value,
            webFormAddBook.htmlMixin.getInputBookPages().value,
            webFormAddBook.htmlMixin.getInputBookIsRead().value,
        )
        this.#addBookToLibrary(bookObject);
        return this.#drawBook(bookObject);
    }

    #removeBook() {
        const bookIndex = +webFormRemoveBook.formInputBookIndex().value;
        const bookObject = this.#library.find((obj) => obj.bookCount === bookIndex);
        if (bookObject === void(0)) { return }
        const bookArrayIndex = this.#library.findIndex((obj) => obj === bookObject);
        const bookDisplay = document.querySelector(`[data-index='${bookIndex}']`).parentNode;
        this.#library.splice(bookArrayIndex, 1);
        bookDisplay.remove();
    }

    #toggleBookReadState(button) {
        button.addEventListener('click', () => {
            let node = button.parentNode.parentNode;
            node = node.querySelector('[data-index]');
            let bookIndex = +node.getAttribute('data-index');
            let bookObject = this.#library.find((obj) => obj.bookCount === bookIndex);
            if (bookObject.isRead === true) {
                bookObject.isRead = false;
                button.textContent = 'Unread';
            } else {
                bookObject.isRead = true;
                button.textContent = 'Read';
            }
        })
    }

    #addBookToLibrary(book) {
        this.#library.push(book);
    }

    #drawLibrary() {
        for (const book of this.#library) {
            this.#drawBook(book);
        }
    }
    #drawBook(book) {
        const bookElement = document.createElement('div');
        const bookAttribution = document.createElement('div');
        const bookMetaData = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const bookIsRead = document.createElement('button');
        const bookDataIndex = document.createElement('div');

        bookElement.classList.add('book');
        bookAttribution.classList.add('attribution');
        bookMetaData.classList.add('metadata');
        bookIsRead.classList.add('read-state');

        bookDataIndex.setAttribute('data-index', book.bookCount.toString());

        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = `${book.pages} pages`;
        bookDataIndex.textContent = book.bookCount.toString()

        book.isRead === true ? bookIsRead.textContent = "Read" : bookIsRead.textContent = "Unread"

        bookAttribution.appendChild(bookTitle);
        bookAttribution.appendChild(bookAuthor);
        bookMetaData.appendChild(bookPages);
        bookMetaData.appendChild(bookIsRead);
        bookElement.appendChild(bookAttribution);
        bookElement.appendChild(bookMetaData);
        bookElement.appendChild(bookDataIndex);
        this.#toggleBookReadState(bookIsRead);

        this.#shelf.appendChild(bookElement);
    }
}

const webFormRemoveBook = {
    formRemoveBookButton() { return document.querySelector('#form-remove-book-button')},
    formInputBookIndex() { return document.querySelector('#input-remove-book')},
}


export default Library