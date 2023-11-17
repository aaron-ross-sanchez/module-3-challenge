// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This function inside of the writePassword() function, meaning that when writePassword is called, generatePassword will be called after.
function generatePassword() {
  //Creates a variable that will stop the while loop once if statement is true
  let isValidInput = false;
  //This is to check to see if the addEventListener is working properly
  console.log("Button Clicked")

  //Initial alert for instructions
  alert("To generate a secure password, please press close and answer a few questions.");

  //This loop will run until the isValidInput is true
  while (!isValidInput) {
    try {
      //characterInput
      let characterInput = prompt("Please enter the amount of characters between 8-128 that you would like to include in your password.");
      //parseFloat turns a string into a floating-point number.
      let characterNumber = parseFloat(characterInput);
      //This will test if the number they entered is within the parameters wanted.
      if (!isNaN(characterNumber) && characterNumber > 7 && characterNumber < 129) {
        //If the number gets logged to the console, then it fits the parameters defined in the prompt()
        console.log("The user entered a valid number:", characterNumber);
        //This variable revalue will stop the while loop
        isValidInput = true;

        //These variable initally define what characters are being used
        //They use as empty string so that we can redefine the value based on user input
        let lowercase = "";
        let uppercase = "";
        let numbers = "";
        let special = "";

        //inputs for types of characters
        let lowercaseInput = confirm("Would you like to include lowercase letters? Press OK for YES, CANCEL for NO.");
        let uppercaseInput = confirm("Would you like to include uppercase letters? Press OK for YES, CANCEL for NO.");
        let numbersInput = confirm("Would you like to include numbers? Press OK for YES, CANCEL for NO.");
        let specialInput = confirm("Would you like to include special characters? Press OK for YES, CANCEL for NO.");

        //This will be the new value if the user input is true
        let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let numbersChars = "1234567890";
        let specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
        
        /*This set of if statements will change the orginal character type variables
        based off of the character type inputs.*/

        //This will check if the lowercaseInput is true(confirm returns true from OK response)
        if (lowercaseInput) {
          lowercase = lowercaseChars;
        }
        if (uppercaseInput) {
          uppercase = uppercaseChars;
        }
        if (numbersInput) {
          numbers = numbersChars;
        }
        if (specialInput) {
          special = specialChars;
        }
        if (lowercaseInput == false && uppercaseInput == false && numbersInput == false && specialInput == false) {
          alert("Since you decided to not include any character types in your password... lowercase characters have been chosen for you...")
          lowercase = lowercaseChars;
        }

        //This creates the final list of characters that the program can choose from based off of user input
        let characters = lowercase + uppercase + numbers + special;
        /*This creates a variable for the actual password that will be returned
        It is empty because it will be replaced with the values from the for loop below*/
        let randomPassword = "";
        
        //This for loop will continue until it hits the value from characterNumber
        for (let i = 0; i < characterNumber; i++) {
          //This variable gets a random number between 8 and the number the user selected
          let randomIndex = Math.floor(Math.random() * characters.length);
          //This will update the randomPassword
          //charAt(randomIndex) will select the character number in the string with the randomIndex variable
          //It will continue to add a character for the remainder of the loop
          randomPassword += characters.charAt(randomIndex)
        }
        //The result of this function is stored in randomPassword
        return randomPassword;

      } else { 
        //This will put an error in the console. This showed me that the following if statement works
        throw new Error("Invalid input. Please enter a number between 8-128.");
      }
    //This finished the try...catch block and the alert() tells the user why it won't continue and the while loop will bring it back to the first prompt.
    } catch (error) {
        alert(error.message);
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
