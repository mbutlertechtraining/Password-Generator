// Assignment code here
// numeric characters 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// lower case characters
var lowerCasedCharacters = [

    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];
// upper case characters 
var upperCasedCharacters = [

    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];
// special characters 
var specialCharacters = [

    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// function to prompt user 
function getPassword() {
    // This variable prompts the user for a length method parseInt entry into an integer 
    var length = parseInt(
        prompt("How long would you like your password to be?")
    )
    var confirmTheNumericCharacters = confirm(
        "Would you like numbers?"
    )
    var confirmTheLowerCaseCharacters = confirm(
        "Would you like lower case letters?"
    )
    var confirmTheUpperCaseCharacters = confirm(
        "Would you like upper case letters?"
    )
    var confirmSpecialCharacters = confirm(
        "Would you like special characters?"
    )

    if (confirmTheNumericCharacters === false &&
        confirmTheLowerCaseCharacters === false &&
        confirmTheUpperCaseCharacters === false &&
        confirmSpecialCharacters === false) {
        alert("Please make a selection");
        return;
    }
    var passwordChoice = {
        length: length,
        confirmTheNumericCharacters: confirmTheNumericCharacters,
        confirmTheLowerCaseCharacters: confirmTheLowerCaseCharacters,
        confirmTheUpperCaseCharacters: confirmTheUpperCaseCharacters,
        confirmSpecialCharacters: confirmSpecialCharacters,
    }
    return passwordChoice;
}

function getRandom(a) {
    var randomIndex = Math.floor(Math.random() * a.length);
    var randomSelection = a[randomIndex];
    return randomSelection;
}
function generatePassword() {
    // This function will be used to generate the password from input
    var options = getPassword();
    var results = [];
    var possibleCharacters = [];
    var certainCharacters = [];
    if(options.confirmTheNumericCharacters) {
        possibleCharacters=possibleCharacters.concat(numericCharacters);
        certainCharacters.push(getRandom(numericCharacters));
    }
    if(options.confirmTheLowerCaseCharacters) {
        possibleCharacters=possibleCharacters.concat(lowerCasedCharacters);
        certainCharacters.push(getRandom(lowerCasedCharacters));
    }
    if(options.confirmTheUpperCaseCharacters) {
        possibleCharacters=possibleCharacters.concat(upperCasedCharacters);
        certainCharacters.push(getRandom(upperCasedCharacters));
    }
    if(options.confirmSpecialCharacters) {
        possibleCharacters=possibleCharacters.concat(specialCharacters);
        certainCharacters.push(getRandom(specialCharacters));
    }

    for (var i = 0; i < options.length; i++) {
        var possibleCharacters = getRandom(possibleCharacters);
        results.push(possibleCharacters);
    }
        
    for (var i = 0; i < certainCharacters.length; i++) {
        results[i] = certainCharacters[i];
    }
return results.join("");
}
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