'use strict'

//ver1
function submitForm(){
//console.log('text');
//let text = document.getElementById('myClass').value;
//let text = document.getElementById('.myClass').value;
//or
let text = document.querySelector('input').value;
let spaceFree = text.split(' ').join('');
alert(isPalindromic(spaceFree));
}

//let text = document.getElementById('text').value;
function isPalindromic(userInput){
  let userInputArray = userInput.toLowerCase().split('');
  userInputArray.reverse();
  let reverseInput = userInputArray.join('');

  return (userInput.toLowerCase() === reverseInput);
  // if (userInputArray === reverseInput){return true;}
  // else {return false;}

}

console.log(isPalindromic('mom'));



//ver3
let name = 'john';
let result = name.split('');
//let result = name.split('o');
console.log(result);
let rev = result.reverse();
console.log(rev);
let str = rev.join("");
console.log(str);
console.log(name === str);


//ver2
function checkPalindrom (str){
  return str == str.split('').reverse().join('');
}
console.log(checkPalindrom ('name'));



// function string (rev){
//   let str = "";
//   for(let i = 0; i < rev.length; i++){
//     str[i] + = rev[i];
//   }
// }
//
// console.log(string(rev));
