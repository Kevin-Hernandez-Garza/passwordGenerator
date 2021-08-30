// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//creating the data type variables
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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



// function: when you click on generate button it prompts messages to select password criteria. 
var generateBtnPrompt = function () {
    var confirmNumber = confirm("Click 'OK' to generate numbers in your password");

    var confirmLowerCase = confirm("Click 'OK' to generate lowerCase characters in your password");

    var confirmUpperCase = confirm("Click 'OK' to generate upperCase characters in your password");

    var confirmSymbols = confirm("Click 'OK' to generate symbols characters in your password");

    if (!(confirmNumber || confirmLowerCase || confirmUpperCase || confirmSymbols)) {
        alert("You need to pick at least one option!");
        return generateBtnPrompt()
    }
}

var passwordLength = function () {
    //parseInt convert a string into an integer
    var charLength = parseInt(prompt("How many characters would you like your password to be? Please choose a number from (8-128)"));

    if (charLength < 8 || charLength > 128 || charLength === "" || isNaN(charLength)) {
        alert("Please choose a number from (8-128)");
        return passwordLength()
    }
}

var generatePassword = function () {

    // possibly put a .lenght at the end of charLength
    for (var i = 0; i < passwordLength; i++) {
        if (confirmNumber === true) {
            console.log(Math.floor(Math.random() * confirmNumber.length));
        }
    };
}