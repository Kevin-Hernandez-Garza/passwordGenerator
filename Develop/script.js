//creating the data type variables
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var symbols = ["!", "#", "$", "%", "@", "&", "'", "*", "+", "(", ")", "-", ".", "_", ";", "/", ":", ";", "<", "=", ">", "?", "~"];


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
};

var passwordLength = function () {
    //parseInt convert a string into an integer
    var charLength = prompt("How many characters would you like your password to be? Please choose a number from (8-128)");

    if (charLength < 8 || charLength > 128 || charLength === "" || isNaN(charLength)) {
        alert("Please choose a number from (0-128)");
        return passwordLength()
    }
};









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

