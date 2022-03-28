var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLowerCaseLetter;
var confirmUppercaseLetter;
var confirmNumberSelection;
var confirmSpecialSelection;
var userChoiceSelection;

// Array of Lower Case letters
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Upper Case
var noUppercase = [];
var toUpper = function (u) {
    return u.toUpperCase();
};

noUppercase = lowerCaseLetters.map(toUpper);

// Number variables
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Special Character Variables
var specialCharacter = ["!", "@", "#", "$", "%", "&", "^", "*", "-", "_", "+", ".", ",", "?"]

// Write password Function
function writePassword () {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

// Event Listener
generateBtn.addEventListener("click", writePassword);

// Begin Function to generate password
function generatePassword () {
    // User input
    passwordLength = prompt("How long would you like your password to be? Choose between 8 and 128");

    if (!passwordLength) {
        alert("A value is required");
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Pick a value between 8 and 128");
        console.log("Password Length " + passwordLength);
    } else {
        // Confirm Lower Case letters
        confirmLowerCaseLetter = confirm ("Do you want lowercase letters?");
        console.log("Lower case " + confirmLowerCaseLetter);

        // Confirm Upper Case Letters
        confirmUppercaseLetter = confirm ("Do you want uppercase letters?")
        console.log("Upper case " + confirmUppercaseLetter);

        // Confirm Numbers
        confirmNumberSelection = confirm ("Do you want numbers?")
        console.log ("Number " + confirmNumberSelection);

        // Confirm Special Character
        confirmSpecialSelection = confirm ("Do you want special characters?")
        console.log ("Special " + confirmSpecialSelection);
    };

    // If answered "No" to all options
    if (!confirmLowerCaseLetter && !confirmUppercaseLetter && !confirmNumberSelection && !confirmSpecialSelection) {
        userChoices = alert ("You must choose at least one of the requirements")

    // If answered "Yes" to all 4 options
    } else if (confirmLowerCaseLetter && confirmUppercaseLetter && confirmNumberSelection && confirmSpecialSelection) {
        userChoices = lowerCaseLetters.concat(noUppercase, number, specialCharacter);
        console.log(userChoices);
    }

    // If answered "Yes" to 3 options
    else if (confirmLowerCaseLetter, confirmUppercaseLetter, confirmNumberSelection) {
        userChoices = lowerCase.concat(noUppercase, number);
        console.log(userChoices);
    }

    else if (confirmLowerCaseLetter && confirmUppercaseLetter && confirmSpecialSelection) {
        userChoices = lowerCase.concat(upperCase, specialCharacter);
        console.log(userChoices);
    }

    else if (confirmLowerCaseLetter && confirmNumberSelection && confirmSpecialSelection) {
        userChoices = upperCase.concat(number, specialCharacter);
        console.log(userChoices);
    }

    else if (confirmUppercaseLetter && confirmNumberSelection && confirmSpecialSelection) {
        userChoices = upperCase.concat(numbers, specialCharacter);
        console.log(userChoices);
    }

    // If answered "Yes" to 2 options
    else if (confirmLowerCaseLetter && confirmLowerCaseLetter) {
        userChoices = lowerCase.concat(upperCase)
        console.log(userChoices);
    }

    else if (confirmLowerCaseLetter && confirmNumberSelection) {
        userChoices = lowerCase.concat(numbers)
        console.log(userChoices);
    }

    else if (confirmLowerCaseLetter && confirmSpecialSelection) {
        userChoices = lowerCase.concat(specialCharacter);
        console.log(userChoices);
    }

    else if (confirmUppercaseLetter && confirmNumberSelection) {
        userChoices = upperCase.concat(numbers);
        console.log(userChoices);
    }

    else if (confirmUppercaseLetter && confirmSpecialSelection) {
        userChoices = upperCase.concat(specialCharacter)
        console.log(userChoices);
    }

    else if (confirmNumberSelection && confirmSpecialSelection) {
        userChoices = numbers.concat(specialCharacter);
        console.log(userChoices);
    }

    // If only answered "Yes" to 1 option
    else if (confirmLowerCaseLetter) {
        userChoices = lowerCase;
        console.log(userChoices);
    }

    else if (confirmUppercaseLetter) {
        userChoices = upperCase;
        console.log(userChoices);
    }

    else if (confirmNumberSelection) {
        userChoices = numbers;
        console.log(userChoices);
    }

    else if (confirmSpecialSelection) {
        userChoices = specialCharacter;
        console.log(userChoices)
    };


    // Blank Password
    var passwordBlank = [];

    // Random Selection
    for (var i = 0; i < passwordLength; i++) {
        var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
        passwordBlank.push(allChoices);
        console.log(allChoices);
    }

    // Combine and return password
    var password = passwordBlank.join("");
    console.log("Your Password is: " + password);
    return password;
};