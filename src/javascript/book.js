class Book {

    static bookCount= 0;
    constructor(title, author, pages, isRead, bookCount=Book.bookCount) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = Boolean(isRead);
        this.bookCount = Book.bookCount;
        Book.bookCount +=1
    }
}

export default Book