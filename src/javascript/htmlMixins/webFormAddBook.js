const webFormAddBook = (() => {
    const htmlMixin = (() => {
        const getWebFormAddBook = () =>
            document.getElementById("form-add-book");

        const getAddBookButton = () =>
            document.querySelector("#form-add-book-button");
        const getInputBookTitle = () =>
            document.querySelector("#input-book-title");
        const getInputBookAuthors = () =>
            document.querySelector("#input-book-authors");
        const getInputBookPages = () =>
            document.querySelector("#input-book-pages");
        const getInputBookIsRead = () =>
            document.querySelector("#input-book-read");

        return {
            getWebFormAddBook,
            getAddBookButton,
            getInputBookTitle,
            getInputBookAuthors,
            getInputBookPages,
            getInputBookIsRead,
        };
    })();

    return { htmlMixin };
})();

export default webFormAddBook;
