var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

// Array of Lower Case letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// Upper Case
var blankUpper = [];
var toUpper = function (u) {
    return u.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

// Number variables
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

// Special Character Variables
var specialCharacters = ["!", "@", "#", "$", "%", "&", "^", "*", "(", ")", "-", "_", "+", "=", ".", ",", "/", ":", ";", "'", "?"]

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
    passwordLength = prompt("How many characters would you like your password to be? Choose between 4 and 130");

    if (!passwordLength) {
        alert("A value is required");
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("You muste choose a value between 8 and 128");
        console.log("Password Length " + passwordLength);
    } else {
        // Confirm Lower Case letters
        confirmLower = confirm ("Will this contain lowercase letters?");
        console.log("Lower case " + confirmLower);

        // Confirm Upper Case Letters
        confirmUpper = confirm ("Will this contain uppercase letters?")
        console.log("Upper case " + confirmUpper);

        // Confirm Numbers
        confirmNumber = confirm ("Will this contain mnumbers?")
        console.log ("Number " + confirmNumber);

        // Confirm Special Character
        confirmSpecial = confirm ("Will this contain special characters?")
        console.log ("Special " + confirmSpecial);
    };

    // If answered "No" to all options
    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
        userChoices = alert ("You must choose at least one of the criterias")

    // If answered "Yes" to all 4 options
    } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
        userChoices = lowerCase.concat(upperCase, numbers, specialCharacters);
        console.log(userChoices);
    }

    // If answered "Yes" to 3 options
    else if (confirmLower, confirmUpper, confirmNumber) {
        userChoices = lowerCase.concat(upperCase, numbers);
        console.log(userChoices);
    }

    else if (confirmLower && confirmUpper && confirmSpecial) {
        userChoices = lowerCase.concat(upperCase, specialCharacters);
        console.log(userChoices);
    }

    else if (confirmLower && confirmNumber && confirmSpecial) {
        userChoices = upperCase.concat(numbers, specialCharacters);
        console.log(userChoices);
    }

    else if (confirmUpper && confirmNumber && confirmSpecial) {
        userChoices = upperCase.concat(numbers, specialCharacters);
        console.log(userChoices);
    }

    // If answered "Yes" to 2 options
    else if (confirmLower && confirmLower) {
        userChoices = lowerCase.concat(upperCase)
        console.log(userChoices);
    }

    else if (confirmLower && confirmNumber) {
        userChoices = lowerCase.concat(numbers)
        console.log(userChoices);
    }

    else if (confirmLower && confirmSpecial) {
        userChoices = lowerCase.concat(specialCharacters);
        console.log(userChoices);
    }

    else if (confirmUpper && confirmNumber) {
        userChoices = upperCase.concat(numbers);
        console.log(userChoices);
    }

    else if (confirmUpper && confirmSpecial) {
        userChoices = upperCase.concat(specialCharacters)
        console.log(userChoices);
    }

    else if (confirmNumber && confirmSpecial) {
        userChoices = numbers.concat(specialCharacters);
        console.log(userChoices);
    }

    // If only answered "Yes" to 1 option
    else if (confirmLower) {
        userChoices = lowerCase;
        console.log(userChoices);
    }

    else if (confirmUpper) {
        userChoices = upperCase;
        console.log(userChoices);
    }

    else if (confirmNumber) {
        userChoices = numbers;
        console.log(userChoices);
    }

    else if (confirmSpecial) {
        userChoices = specialCharacters;
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