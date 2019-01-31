'use strict'
    function calculate (){
      //console.log('I am here');
      let salaryStr = document.getElementById('salary').value;
        //show error if not a number
        if(isNaN(salaryStr)){
            console.log('Error: not a number. Please try again');
        }
        else {
            let salary = Number(salaryStr);
            //number with two decimal places
            let taxNum = calcTax(salary).toFixed(2);
            
            //print tax and use query selector
        //document.querySelector('#tax').innerHTML = ("tax: " + taxNum);
            console.log('tax: ', document.querySelector('#tax').innerHTML = taxNum);
            
            //print net and use query selector 
            let netNum = (salary - taxNum).toFixed(2);
        //document.querySelector('#net').innerHTML = ("net: " + netNum);
            console.log('net: ', document.querySelector('#net').innerHTML = netNum);
        }

    }

//add event listener
//click anywere in the field runs calculate function
var el = document.getElementById("salary");
el.addEventListener("click", calculate, false);

//function to calculate tax
function calcTax (deductNum){
    if (deductNum > 42705 && deductNum <= 85405){
        return (20 / 100) * (deductNum  - 42705);
    }

    else if (deductNum > 85405 && deductNum <= 103915){
        var num1 = (20 / 100) * (85405 - 42705);
        var num2 = (24 / 100) * (deductNum - 85405);
        return num1 + num2;
    }

    else if (deductNum > 103915){
        var num1 = (20 / 100) * (85405 - 42705);
        var num2 = (24 / 100) * (103915 - 85405);
        var num3 = (25.75 / 100) * (deductNum - 103915);
        return num1 + num2 + num3;
    }

    else {return 0;}
}

// // console.log('boo bar');
// // let salary = 65000;
// // let abc = 'test';
// // function  calculateTax (salary) {
// //   console.log(abc);
// //   if (salary < 42000) {
// //     return 0;
// //   }
// //
// //   else {
// //     return salary * 0.2;
// //   }
// // }
// //
// // let tax = calculateTax(salary - 1000);
// // console.log('net salary: ', salary - tax);
//
//
// function  isWorkingDay (day){
//   if (day === 'Saturday' || day === 'Sanday'){
//     return false;
//   }
//   else {return true}
// }
//
// console.log(isWorkingDay('Sanday'));
//
// console.log('');
//
// let day1 = 'Saturday';
// let result = (day1 === 'Saturday' || day1 === 'Sanday')? false : true;
// console.log(result);
//
// console.log('');
//
// function isWorkingDay2 (Sunday){
//   switch(Sunday){
//     case 'Saturday': return false;
//     break;
//     case 'Sanday':return false;
//     break;
//     default: true;
//     break;
//   }
// }
// console.log(isWorkingDay2('Saturday'));
//
// console.log('');
//
// function isWorkingDay3 (day){
//   return (day !== 'Saturday' && day !== 'Sanday');
// }
// console.log(isWorkingDay3('Monday'));
//
// console.log('');
//
// if ( isWorkingDay3 ('Tuesday')){
//   console.log('yayayayay');
// }
// else {console.log('argggg');}
//
//
// console.log('');
// console.log('');
//
// function average (n1, n2, n3){
//   if (n3 === undefined){n3 = 0;}
//   return (n1 + n2 + n3) / 3;
// }
//
// let avg = average(1,2);
// console.log(avg);
//
//
// function average (n1, n2, n3 = 0){
//   return (n1 + n2 + n3) / 3;
// }
//
// console.log('');
//
// let avg1 = average(1,2);
// console.log(avg1);
//
//
// let average3 = function (n1, n2, n3) {
//   return (n1, n2, n3) / 3;
// }
// console.log(average3);
//
// let average4 = (n1, n2, n3) => {
//   return (n1, n2, n3) / 3;
// }
