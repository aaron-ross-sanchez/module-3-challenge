// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This function inside of the writePassword() function, meaning that when writePassword is called, generatePassword will be called after.
function generatePassword() {

  //This is to check to see if the addEventListener is working properly
  console.log("Button Clicked")

  //Initial alert for instructions
  alert("To generate a secure password, please press close and answer a few questions.");

  //characterInput
  let characterInput = prompt("Please enter the amount of characters between 8-128 that you would like to include in your password.");

  //inputs for types of characters
  let lowercaseInput = confirm("Would you like to include lowercase letters? Press OK for YES, CANCEL for NO.");
  let uppercaseInput = confirm("Would you like to include uppercase letters? Press OK for YES, CANCEL for NO.");
  let numbersInput = confirm("Would you like to include numbers? Press OK for YES, CANCEL for NO.");
  let specialInput = confirm("Would you like to include special characters? Press OK for YES, CANCEL for NO.");
  
  //This should return the result of the function to the password variable in the writePassword function
  return "Generated Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
