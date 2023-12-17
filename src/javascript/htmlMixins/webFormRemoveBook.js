const webFormRemoveBook = (() => {
    const htmlMixin = (() => {
        const getWebFormRemoveBook = () =>
            document.getElementById("form-remove-book");

        const getRemoveBookButton = () =>
            document.querySelector("#form-remove-book-button");
        const getInputBookIndex = () =>
            document.querySelector("#input-remove-book");

        return {
            getWebFormRemoveBook,
            getRemoveBookButton,
            getInputBookIndex,
        };
    })();

    return { htmlMixin };
})();

export default webFormRemoveBook;
