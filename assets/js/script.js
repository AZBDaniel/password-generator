// Assignment code here
function generatePassword () {
  var passwordLength = getPasswordLength();
  var selectedCharacterOptions = selectCharacterOptions();

  var  collectionCharacters = "";
  
  if (selectedCharacterOptions.includeLowercase) {
    collectionCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  if (selectedCharacterOptions.includeUppercase) {
    collectionCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (selectedCharacterOptions.includeNumeric) {
    collectionCharacters += "0123456789";
  }

  if (selectedCharacterOptions.includeSpecial) {
    collectionCharacters += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i ++) {

    generatedPassword += collectionCharacters.charAt(Math.floor(Math.random() * collectionCharacters.length));
    
  }


  return generatedPassword;
}



function getPasswordLength(enteredValue) {
  var promptMessage = "Provide a password length between 8 and 128. Default length is 8.";
  if (enteredValue) {
    promptMessage = enteredValue + " is not between 8 and 128. " + promptMessage;
  }

  const defaultLength = 8;
  var length = Number(prompt(promptMessage, defaultLength));
  
  if (isNaN(length)) {
    return defaultLength;
  } else if (length < 8 || length > 128) {
    return getPasswordLength(length.toString());
  } else {
    return length;
  }
}

function selectCharacterOptions () {
  var selectedOptionsDictionary = {
    includeLowercase: confirm("Include lowercase characters?"),
    includeUppercase: confirm("Include uppercase characters?"),
    includeNumeric: confirm("Include numeric characters?"),
    includeSpecial: confirm("Include special characters?")
  };

 if (!selectedOptionsDictionary.includeLowercase && !selectedOptionsDictionary.includeUppercase && !selectedOptionsDictionary.includeNumeric && !selectedOptionsDictionary.includeSpecial) {
   alert ("You have not selected any character options. Please select at least one.");
   return selectCharacterOptions();
 } else {
    return selectedOptionsDictionary;
 }
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
