setTimeout(rotateTitle, 250);

function rotateTitle(prependSpace = false) {
    const firstChar = document.title.substring(0, 1);
    const nextCharIsSpace = document.title.substring(1, 2) === " ";
    const space = prependSpace === true ? " " : "";

    const newTitle = document.title.substring(1) + space + firstChar;
    document.title = newTitle;

    setTimeout(() => rotateTitle(nextCharIsSpace), 250);
}