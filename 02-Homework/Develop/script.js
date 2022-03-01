var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.textContent = password;

}

  var isSpecialCharaters = "!#$%&')*+-./:;<>=?@[]^_`{|}~".split("");
  var isCapitol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var isLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
  var isNumeric = "0123456789".split("");
  var isLength = "8-128";
  var isChosenOne = [];

  function generatePassword () {
    var password=""
    passwordLength = prompt("How long do you want this password? (8-128 characters)")
    if (+passwordLength<8||+passwordLength>128) {
      alert("You must select a number between 8 and 128");

      return generatePassword;
    }

    var capitolChar = confirm("Do you want capitols in your password?");
    var lowercaseChar = confirm("Do you want lowercases in your password?");
    var specialChar = confirm("Do you want special characters in your password?");
    var numericChar = confirm("Do you want numbers in your password?");

    if(capitolChar) {
      isChosenOne=isChosenOne.concat(isCapitol)
    }

    if(lowercaseChar) {
      isChosenOne=isChosenOne.concat(isLowercase)
    }

    if(specialChar) {
      isChosenOne=isChosenOne.concat(isSpecialCharacters)
    }

    if(numericChar) {
      isChosenOne=isChosenOne.concat(isNumeric)
    }
    
    console.log(isChosenOne)
    for (var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random()*isChosenOne.length);
      password += isChosenOne[randomIndex]
      console.log(password)
    }

  return password;
};

generateBtn.addEventListener("click", writePassword);
