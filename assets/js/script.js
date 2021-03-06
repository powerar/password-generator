// generate a password
function generatePassword() {
  //declare function variables
  var password = '';
  var lettersLower = 'abcdefghijklmnopqrstuvwxyz';
  var lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*';

  
  //prompt the user for password length, if invalid, re-prompt
  var promptLength = prompt("How many characters should your password be? Please enter a number between 8 and 128.");
  if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
    alert("You must enter a number between 8 and 128. Please try again.");
    return generatePassword();
  } 

  //prompt the user for options
  var confirmUppercase = confirm("Should your password contain uppercase letters?");
  var confirmLowercase = confirm("Should your password contain lowercase letters?");
  var confirmNumbers = confirm("Should your password contain numbers?");
  var confirmSymbols = confirm("Should your password contain special characters?");
  var generatedLower = '';
  var generatedUpper = '';
  var generatedNumbers = '';
  var generatedSymbols = '';
  // if no prompts selected, re-prompt
  if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSymbols) {
    alert("You must select at least one option. Please try again.");
    return generatePassword();
  } else

  // generate a password based on options selected
  for (i = 0; password.length < promptLength; i++) {
    if (confirmLowercase) {
      generatedLower += lettersLower.charAt(Math.floor(Math.random() * lettersLower.length));
    }
    if (confirmUppercase) {
      generatedUpper += lettersUpper.charAt(Math.floor(Math.random() * lettersUpper.length));
    }
    if (confirmNumbers) {
      generatedNumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    if (confirmSymbols) {
      generatedSymbols += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    password += generatedLower + generatedUpper + generatedNumbers + generatedSymbols;
    }

  // if the password is too long, remove the extra characters
  if (password.length >= promptLength) {
    var passwordMaxLength = password.length - promptLength;
    function removeCharacters() {
      password = password.substr(0, password.length - passwordMaxLength);
    }
    removeCharacters();
  }
  return password;
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