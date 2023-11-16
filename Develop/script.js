// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This function inside of the writePassword() function, meaning that when writePassword is called, generatePassword will be called after.
function generatePassword() {

  //This is to check to see if the addEventListener is working properly
  console.log("Button Clicked")


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
