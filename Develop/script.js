//creating the data type variables for all possibilities TOO MANY LOL 🥲
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var symbols = ["!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var allChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var lowerNum = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var upperNum = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var numSym = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var lowerUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerSym = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var upperSym = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var numUpLo = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numLoSy = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var upLoSy = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

var upNuSy = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];

// confirm messages once the user load the page
var confirmNumber = confirm("Click 'OK' to generate numbers in your password");

var confirmLowerCase = confirm("Click 'OK' to generate lowerCase characters in your password");

var confirmUpperCase = confirm("Click 'OK' to generate upperCase characters in your password");

var confirmSymbols = confirm("Click 'OK' to generate symbols characters in your password");


// if all of the confirm prompts are false then it will return an alert
if (!(confirmNumber || confirmLowerCase || confirmUpperCase || confirmSymbols)) {
    alert("You need to pick at least one option! Refresh the page to start over please 💜");
}


// functions that has all the password criteria and question to select the number of characters
function generatePassword() {
    //parseInt convert a string into an integer
    var passwordLength = parseInt(prompt("How many characters would you like your password to be? Please choose a number from (8-128)"));

    // here we return an alert if the input doesn't meet the requirements for a number between (8-128)
    if (passwordLength < 8 || passwordLength > 128 || passwordLength === "" || isNaN(passwordLength)) {
        alert("Please choose a number from (8-128)");
        // return passwordLength()
    };

    var result = "";

    // for loop to generate the passwords possibilities... 🤕
    for (var i = 0; i < passwordLength; i++) {

        if (confirmNumber === true && confirmLowerCase === true && confirmUpperCase === true && confirmSymbols === true) {
            result += (allChar[(Math.floor(Math.random() * allChar.length))]);
        }
        else if (confirmLowerCase === true && confirmNumber === true) {
            result += (lowerNum[(Math.floor(Math.random() * lowerNum.length))]);
        }
        else if (confirmUpperCase === true && confirmNumber === true) {
            result += (upperNum[(Math.floor(Math.random() * upperNum.length))]);
        }
        else if (confirmNumber === true && confirmSymbols === true) {
            result += (numSym[(Math.floor(Math.random() * numSym.length))]);
        }
        else if (confirmLowerCase === true && confirmUpperCase === true) {
            result += (lowerUpper[(Math.floor(Math.random() * lowerUpper.length))]);
        }
        else if (confirmLowerCase === true && confirmSymbols === true) {
            result += (lowerSym[(Math.floor(Math.random() * lowerSym.length))]);
        }
        else if (confirmUpperCase === true && confirmSymbols === true) {
            result += (upperSym[(Math.floor(Math.random() * upperSym.length))]);
        }
        else if (confirmNumber === true) {
            result += (numbers[(Math.floor(Math.random() * numbers.length))]);
        }
        else if (confirmLowerCase === true) {
            result += (lowerCase[(Math.floor(Math.random() * lowerCase.length))]);
        }
        else if (confirmUpperCase === true) {
            result += (upperCase[(Math.floor(Math.random() * upperCase.length))]);
        }
        else if (confirmSymbols === true) {
            result += (symbols[(Math.floor(Math.random() * symbols.length))]);
        }
    }

    //this returns the value to the password variable declared created below and inserts it into the HTML textarea using the querySelector
    return result;
};

// Get references to the #generate element .querySelector is a method
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
