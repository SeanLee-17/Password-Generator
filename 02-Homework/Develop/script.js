var generateBtn = document.querySelector("#generate");

function generator {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password

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

      return
    }
    var capitolChar = confirm("Do you want capitols in your password?");
    var lowercaseChar = confirm("Do you want lowercases in your password?");
    var specialChar = confirm("Do you want special characters in your password?");
    var numericChar = confirm("Do you want numbers in your password?");

    if (capitolChar) {
      isChosenOne=isChosenOne.concat(capitolChar)
    }

    if (lowercaseChar) {
      isChosenOne=isChosenOne.concat(lowercaseChar)
    }

    if (specialChar) {
      isChosenOne=isChosenOne.concat(specialChar)
    }

    if (numericChar) {
      isChosenOne=isChosenOne.concat(numericChar)
    }

    for (var i = 0; i < parseInt(passwordLength); i++) {
      var randomIndex = Math.floor(Math.random()*isChosenOne.length);
      password+=isChosenOne[randomIndex]
    }
  return password;
};

generateBtn.addEventListener("click", writePassword);


