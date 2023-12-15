import "./stylesheets/minimum.css";
import "./stylesheets/style.css";
import Library from "./javascript/library";

(() => {
    const lib = new Library();
    lib.setWebFormAddBookListener();

    return { lib };
})();
