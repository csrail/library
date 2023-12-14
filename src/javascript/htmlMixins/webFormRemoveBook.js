const webFormRemoveBook = (() => {

    const htmlMixin = (() => {
        const getRemoveBookButton = () => document.querySelector('#form-remove-book-button')
        const getInputBookIndex = () => document.querySelector('#input-remove-book')

        return {
            getRemoveBookButton,
            getInputBookIndex,
        }
    })();

    return { htmlMixin }
})();

export default webFormRemoveBook