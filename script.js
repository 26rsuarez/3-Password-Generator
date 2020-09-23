// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  /* alphabet, nums, and special chars are a string that will be accessed later */
  var alphaBet = 'abcdefghijklmnopqrstuvwxyz';
  var nums = '0123456789'
  var specialChars = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  /* prompt the user to enter a password length */
  var pLength = prompt("How long do you want the password to be? (8 to 128)");

  /* if length given by user is too short or too long an alert is shown and asks for a new length*/
  while (pLength<8 || pLength>128) {
    alert("please choose a length between 8 and 128 characters!");
    var pLength = prompt("How long do you want the password to be? (8 to 128)");
  }

  var criteria = []; /* this array will contain the criteria */

  /* comfirm messages to ask the user what criteria they want */
  var yesLower = confirm("Do you want lower case letters?");
  if (yesLower==true) {
    criteria.push(alphaBet.toLowerCase()); /* this will push the alphabet to the criteria */
  }

  var yesUpper = confirm("Do you want upper case letters?");
  if (yesUpper==true) {
    criteria.push(alphaBet.toUpperCase());
  }
  var yesNums = confirm("Do you want numbers?");
  if (yesNums==true) {
    criteria.push(nums);
  }
  var yesSpecial = confirm("Do you want special characters?");
  if (yesSpecial==true) {
    criteria.push(specialChars);
  }

  /* if user chooses no criteria they will be asked to start again */
  if (yesUpper==false && yesLower==false && yesNums==false && yesSpecial==false) {
    alert("You must choose at least one criteria");
    generatePassword();
  }
  /* this variable will hold the password */
  var password = '';

  /* a for loop will pick a random character and criteria each time for the pLength */
  for (var i=0; i<pLength; i++) {
      ranCriteria = criteria[Math.floor(Math.random()*criteria.length)]; /* this picks a random criteria */
      ranChar = ranCriteria[Math.floor(Math.random()*ranCriteria.length)]; /* this picks a random character */
      
      password += ranChar; /* this adds the character to the password */
    }
  
  return(password);
  }
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);