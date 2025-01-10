/* Programmed by VZHQZ */

/* Generates the password itself */
function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";

    let password = "";
    let allowedChars = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if(length < 1) {
        return "Your password's length must be greater than or equal to 1.";
    } else if(allowedChars === "") {
        return "One set of characters must be selected.";
    } else {
        for(let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
    }

    return password;
}


/* Returns the password onto the webpage */
function returnPassword() {
    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeUpperCase = document.getElementById("includeUpperCase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const passLength = document.getElementById("passLength").value;
    const resultText = document.getElementById("resultText");
    const password = generatePassword(passLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
    resultText.textContent = `Generated Password: ${password}`;
}
