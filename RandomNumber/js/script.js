'use strict'

//generate number between 15 and 20
function generateRandom (min, max){
    let num = Math.round((Math.random() * (max - min)) + min);
    //return Math.round((Math.random() * (max - min)) + min);
    console.log(num);
}

console.log('random number between 15 and 20');
let random = generateRandom(15, 20);


console.log('');

function generateRandom (num1, num2) {
    //cehck argument length
    let argLengh = arguments.length;
    
    if (num2 === undefined){num2 = 0;}

    let min = parseInt(num1);
    let max = parseInt(num2);
    
    //if arment length is greator then 0 then calculate random number
    if (argLengh > 0){
        
        let generateRandom2 = (min, max) =>{
            let num = Math.round((Math.random() * (max - min)) + min);
            console.log(num);
        }

        generateRandom2(min,max);

    }
    
    //if argument length is 0 then return 0
    else {console.log(0);}
    
}

console.log('random number between 0 and 1000');
generateRandom (0,1000);

console.log('random number if one parameter not defined');
generateRandom (100);

console.log('number if parameter not defined');
generateRandom();



//let generateRandom2 = (min2, max2) =>{
//    
//    let num;
//    if (max2 === undefined) {
//        max2 = 0;
//        num = Math.round((Math.random() * (max2 - min2)) + min2);
//    }
//    
////    else if (isNaN(min2) ){
////        min2 = 0;
////        num = Math.round((Math.random() * (max2 - min2)) + min2);
////    }
//
//    else {
//        num = Math.round((Math.random() * (max2 - min2)) + min2);
//    }
//    console.log(num);
//}

//console.log('random number between 0 and 1000');
//generateRandom2(0,1000);
//
//console.log('');
//
//console.log('random number if one parameter not defined');
//generateRandom2(100);
//
//console.log('');
//console.log('number if parameter not defined');
//generateRandom2();




