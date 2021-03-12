// Assignment code here

//Generate string of characters based on the promptLength
function generatePassword() {
  var promptLength = prompt("How many characters should your password be? Please enter a number between 8 and 128.");
  //var uppercase = alert("Should your password contain uppercase letters?");
  //var lowercase = alert("Should your password contain lowercase letters?");
  //var numbers = alert("Should your password contain numbers?");
  //var special = alert("Should your password contain special characters?");
  var password = '';
  var lettersLower = 'abcdefghijklmnopqrstuvwxyz';
  var lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers = '0123456789';
  var symbols = '!@#$%^&*';
  for (i = 0; password.length < promptLength; i++) {
    debugger;
    password += lettersLower.charAt(Math.floor(Math.random() * lettersLower.length)) + 
    numbers.charAt(Math.floor(Math.random() * numbers.length)) +
    symbols.charAt(Math.floor(Math.random() * symbols.length)) +
    lettersUpper.charAt(Math.floor(Math.random() * lettersUpper.length));

    if (password.length >= promptLength) {
      var passwordMaxLength = password.length - promptLength;
      function removeCharacters() {
        password = password.substr(0, password.length - passwordMaxLength);
      }

      removeCharacters();
    }
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
