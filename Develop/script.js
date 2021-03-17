// Array of special characters to be included in password
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
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Array of lowercase characters to be included in password
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
  // Array of uppercase characters to be included in password
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
  
  // Global Variables
  var setLength;
  var setUpperCase;
  var setLowerCase;
  var setNumbers;
  var setSpecial;
  
  // Assignment Code
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input.
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  // Created function to get password parameters.
  function getParameters() {
    var setLength = parseInt(
      prompt("Choose between 8 and 128 characters for your password.")
    );
   
  // Length confirm.
    if (isNaN (setLength) === true || setLength < 8 || setLength > 128) {
      window.alert("Must choose a number or fit within the parameters!")
  
      return;
    }
  
   else { 
     var setUpperCase = confirm("Do you want uppercase letters?")
     
   }
  // Uppercase confirm.
    if (setUpperCase) {
     
      var setLowerCase = confirm("Do you want lowercase letters?")
    }
    else {
      setLowerCase = confirm("Do you want lowercase letters?")
    }
    
    // Lowercase confirm.
    if (setLowerCase) {
    
      var setNumbers = confirm("Do you want numbers?")
    }
    else {
       setNumbers = confirm("Do you want numbers?")
    }
  
  // Numbers confirm.
    if (setNumbers) {
  
      var setSpecial = confirm("Do you want special characters?")
    }
    else {
      setSpecial = confirm("Do you want special characters?")
    }
  
  // Special characters confirm.
    if (setSpecial) {
  
    }
  
    // If no character is selected, alert.
    if (!setUpperCase &&
        !setLowerCase &&
        !setNumbers &&
        !setSpecial) {
          window.alert("Must choose at least one character type!")
  
          return;
        }
    // Store user input
        var finalPassword = {
          setLength: setLength,
          setUpperCase: setUpperCase,
          setLowerCase: setLowerCase,
          setNumbers: setNumbers,
          setSpecial: setSpecial
        };
  
      return finalPassword;
  };
  
  // Generate Password
  function generatePassword() {
   var parameters = getParameters();
  
   //Empty arrays to push selected characters to.
   var possibleChar = []
   var result = []
  
   // Generates Uppercase Character if selected.
   if (parameters.setUpperCase) {
    possibleChar = possibleChar.concat(upperCasedCharacters)
   }
  // Generates Lowercase Character if selected.
   if (parameters.setLowerCase) {
    possibleChar = possibleChar.concat(lowerCasedCharacters)
   }
  // Generates Numeric Character if selected.
   if (parameters.setNumbers) {
    possibleChar = possibleChar.concat(numericCharacters)
   }
  // Generates Special Character if selected.
   if (parameters.setSpecial) {
    possibleChar = possibleChar.concat(specialCharacters)
   }
  
   //Loops until selected password length is met.
  for (i = 0; i < parameters.setLength; i++) {
    var index = Math.floor(Math.random() * possibleChar.length);
    var selectedChar = possibleChar[index]; 
  
    result.push(selectedChar);
  }
  //Returns final password
  return result.join('')
  };
  