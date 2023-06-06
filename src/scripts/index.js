// const firstRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
// const secondRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
// const thirdRow = ["Z", "X", "C", "V", "B", "N", "M"];

const spaceBar = document.querySelector(".space-bar");

window.addEventListener("keydown", function (event) {
    if (event.key.length !== 1) return;
    if (event.key === " ") {
        spaceBar.classList.add("key-active");
    } else {
        const keyElement = document.querySelector(`.key.${event.key.toLowerCase()}`);
        if (keyElement) {
            keyElement.classList.add("key-active");
        }
    }
});

window.addEventListener("keyup", function (event) {
    if (event.key.length !== 1) return;
    if (event.key === " ") {
        spaceBar.classList.remove("key-active");
    } else {
        const keyElement = document.querySelector(`.key.${event.key.toLowerCase()}`);
        if (keyElement) {
            keyElement.classList.remove("key-active");
        }
    }
});

// Represent the text as an array of letter objects
const text = "Your text goes here";
let letters = Array.from(text).map(char => ({ char, isTyped: false, isMistake: false }));

// Function to render the array of letters to HTML
function renderText() {
    let html = letters
        .map(letter => {
            let classList = "";
            if (letter.isTyped) classList += "typed ";
            if (letter.isMistake) classList += "mistake ";
            return `<span class=${letter} ${classList}>${letter.char}</span>`;
        })
        .join("");
    document.querySelector(".text-container").innerHTML = html;
}

// Initial render
renderText();

// Add keydown event listener
window.addEventListener("keydown", function (event) {
    // Only handle character keys
    if (event.key.length === 1) {
        // Get the first untyped letter
        let letterToType = letters.find(letter => !letter.isTyped);
        
        //TODO: look for first char in text that has the letterToType class but doesnt have the typed class and highlight it accordingly

        if (letterToType.char === event.key) {
            letterToType.isTyped = true;
        } else {
            letterToType.isMistake = true;
        }
        // Update the text
        renderText();
    }
});
