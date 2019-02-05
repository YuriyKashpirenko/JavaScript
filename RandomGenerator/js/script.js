'use strict'

console.log('Random Generator');
console.log('================');

let defMin = 0;
let defMax = 1000;


function generateRandom (min, max) {
    //cehck argument length
    let argLengh = arguments.length;
    
    if (max === undefined){max = 0;}
    
    //parse integer
    let min1 = parseInt(min);
    let max1 = parseInt(max);
    
    //if argument length is 0 then use default min and max
    if (argLengh == 0){generateRandom (defMin, defMax);}
    else {
         let generateRandomNum = (min, max) =>{
            let num = Math.round((Math.random() * (max - min)) + min);
            
            //to make an integer
            let result = Math.floor(num); 
            console.log(result);
        }

        generateRandomNum(min1,max1);
    }    
}

console.log('random integer between 0 and 1000');
generateRandom (0,1000);

console.log('random integer if one parameter not defined');
generateRandom (100);

console.log('random integer if parameters not defined (default values)');
generateRandom();

