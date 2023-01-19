// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var password = [];
var passlength = 10;
var pool = ['1','2','3','4','5','6','7','8','9','0','q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','<','>',':','!','@','#','$','%','^','&','*','(',')','_','+','=','-',';','.',',','?','Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']; 

// Write password to the #password input


function generatePassword() {
  
  let userPasswordLength = prompt('How many digits do you want your password to be?');
  console.log('userPassword', userPasswordLength)
  if(userPasswordLength){
    password = [];
    for (var i = 0; i < userPasswordLength; i++){
      password.push(pool[Math.floor(Math.random() * pool.length)]);
      
    };

  }
  writePassword(password)

}



function writePassword(password) {
  
  passwordText.value = password.join('');
  
 
}



// Add event listener to generate button
//generateBtn.addEventListener("click", generatePassword());



