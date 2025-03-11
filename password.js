const readLineSync=require('readLine-sync');


function isValidPassword (password){if (password.lenght<8) {console.log("Your password must be at least 8 characters logn");};return false;};
if( [!/A-Z/].test(password)){console.log("Your password must contain at least one uppercase letter");return false;};
if([!/0-9/].test(password)){console.log("Your password must contatin at leas one number");return false;};
  
return true;
let password;
do{ password=readLineSync.question}("Enter your password:");
if(!isValidPassword(passoword)){console.log("Invalid password");}
else(console.log('Your password is valid!'));


