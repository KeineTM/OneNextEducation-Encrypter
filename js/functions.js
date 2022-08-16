// Variable declaration
let input;
let output;


/* ------------  ------------  ------------  ------------  ------------ */
/* ------------ ENCRYPT ------------ */
/* ------------  ------------  ------------  ------------  ------------ */

// Text validation
const validateText = (text = "") => {
    let result;
    let regex = new RegExp(/^[a-zA-Z,.:ñÑ"\s]+$/g); // Regular expression for only admit letters y white spaces

    (!text) // Validate if exist a text
        ? alert ("No se ingresó ningún texto.") // If does not
        : (!text.match(regex)) // If does compares with the regular expression
            ? alert ("Únicamente se aceptan letras y espacios.") // If didn't match
            : result = true; // If match return true
    
    return result;
}

// Function for encrypt
const encryptText = (text = "") => {
    const keys = { // Object with the keys for encrypt
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    // Method replace() with regular expression that searches for all vowels in the text and replace them with the keys from the object
    return text.replace(/a|e|i|o|u/g, (matched) => keys[matched]);
}

// Function for buttonEncrypt
const buttonEncryptEvent = () => {
    input = document.querySelector(".inputText").value.toLocaleLowerCase();
    if (validateText(input)) { // Validate
        // Encrypt
        output = encryptText(input);
        // Show and hidden HTML elements
        document.querySelector(".frameDefaultMessage").style.display = "none";
        document.querySelector(".defaultImg").style.display = "none";
        document.querySelector("Button.copy").style.display = "block";
        document.querySelector(".outputText").style.display = "block";
        // Show result in textarea and focus
        document.querySelector(".outputText").value = output;
        document.querySelector(".outputText").focus();
    }
}


/* ------------  ------------  ------------  ------------  ------------ */
/* ------------ COPY TEXT ------------ */
/* ------------  ------------  ------------  ------------  ------------ */

const copyButton = () => {
    // Save content of textarea
    let content = document.querySelector(".outputText");

    content.select(); // Select content of textarea
    // Copy to clipboard
    // Not recommended since it's officially obsolete!
    document.execCommand("copy"); 

    document.querySelector(".inputText").value = ""; // Clear input value
    document.querySelector(".inputText").focus(); // Focus input area
}


/* ------------  ------------  ------------  ------------  ------------ */
/* ------------ DESENCRYPT ------------ */
/* ------------  ------------  ------------  ------------  ------------ */

// Function for desencrypt that reverse the keys
const dencryptText = (text = "") => {
    const keys = { // Object with the keys for encrypt
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };

    // Method replace() with regular expression that searches for all vowels in the text and replace them with the keys from the object
    return text.replace(/ai|enter|imes|ober|ufat/g, (matched) => keys[matched]);
}

// Function for buttonDencrypt
const buttonDencryptEvent = () => {
    input = document.querySelector(".inputText").value.toLocaleLowerCase();
    if (validateText(input)) { // Validate
        // Dencrypt
        output = dencryptText(input);
        // Show and hidden HTML elements
        document.querySelector(".frameDefaultMessage").style.display = "none";
        document.querySelector(".defaultImg").style.display = "none";
        document.querySelector("Button.copy").style.display = "block";
        document.querySelector(".outputText").style.display = "block";
        // Show result in input and focus
        document.querySelector(".outputText").value = output;
        document.querySelector(".outputText").focus();
    }
}