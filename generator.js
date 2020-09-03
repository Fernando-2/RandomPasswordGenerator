// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
    //created possibleChoices so it would be master array when I loop at bottom//
    var possibleChoices = []
    var passWord = "";
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var numbers = [0,1,2,3,4,5,6,7,8,9]
    var specialChars = ["!","#","~","@","$","%","^","&","*","+"]
    
    var passWordLength  = parseInt(prompt("How many characters long would you like your password to be can be \n no less then 8 characters and no more then 128"));
    
    if(passWordLength < 8 || 128 < passWordLength){
        alert("Must pick between 8 and 128")
       //return so when invalid it takes you back to nothing in the password line//
        return "" ;
    } 
    //confirms asking user if they want those character in password must give
    //each confirm a variable so that when the confirm can be denied the the master
    //array wont use whatever is concated at that confirm
    var chooseLower = confirm(" Do you want lowercase letters in your password ?")
     if(chooseLower) {
        //concat the possibleChoices array to the lowerCase array so that it
        //becomes apart of the master array and so forth with all the confirms
        possibleChoices = possibleChoices.concat(lowerCase);
     }
        var chooseUp = confirm(" Do you want uppercase letters in your password ?")
        if(chooseUp){
            possibleChoices = possibleChoices.concat(upperCase);
        }
        var chooseNum = confirm(" Do you want numbers in your password ?")
        if(chooseNum){
            possibleChoices = possibleChoices.concat(numbers);
        }
        var chooseSpec = confirm("Do you want special characters in your password")
        if(chooseSpec){
            possibleChoices = possibleChoices.concat(specialChars);
        }
        //For loop starts at math.random//
        for(var i = 0;i < passWordLength;i++)
         passWord += possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
        
return passWord;
}

