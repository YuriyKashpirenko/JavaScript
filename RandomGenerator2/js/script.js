'use strict'

let defMin = 0;
let defMax = 1000;

let generateRandom = (min, max) =>{
   let num = Math.round((Math.random() * (max - min)) + min);
   //to make an integer
   let result = Math.floor(num);
   console.log(result);
}

console.log('random integer between 0 and 1000');
generateRandom (0,1000);
