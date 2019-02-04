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

