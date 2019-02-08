'use strict'


let generateRandom = (min = 0, max = 1000) =>{
   let num = Math.round((Math.random() * (max - min)) + min);
   //to make an integer
   let result = Math.floor(num);
   console.log(result);
}

console.log('random integer between 0 and 1000');
generateRandom (20);
