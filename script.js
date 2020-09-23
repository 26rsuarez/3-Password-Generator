// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  /* alphabet and special chars are a string that will be accessed later */
  var alphaBet = 'abcdefghijklmnopqrstuvwxyz';
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  /* prompt the user to enter a password length */
  var pLength = prompt("How long do you want the password to be? (8 to 128)");

  /* if length given by user is too short or too long alert and restart process */
  while (pLength<8 || pLength>128) {
    alert("please choose a length between 8 and 128 characters!");
    var pLength = prompt("How long do you want the password to be? (8 to 128)");
  }

  /* comfirm messages to ask the user what criteria they want */
  var yesLower = confirm("Do you want lower case letters?");
  var yesUpper = confirm("Do you want upper case letters?");
  var yesNums = confirm("Do you want numbers?");
  var yesSpecial = confirm("Do you want special characters?");

  /* if user chooses no criteria they will be asked to start again */
  if (yesUpper==false && yesLower==false && yesNums==false && yesSpecial==false) {
    alert("You must choose at least one criteria");
    generatePassword()
  }
  return("123")

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);