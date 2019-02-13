'use strict'
    function calculate (){
      let salaryStr = document.getElementById('salary').value;
        //show error if not a number
        if(isNaN(salaryStr)){
            console.log(
            document.querySelector('#error').innerHTML = 
                salaryStr + 'is not a number');
        }
        else {
            let salary = Number(salaryStr);
            //number with two decimal places
            let taxNum = calculateTax(salary).toFixed(2);
            
            //print tax, net income, and use query selector
            console.log('Deductions: ', document.querySelector('#tax').innerHTML = taxNum);
            
            let netNum = (salary - taxNum).toFixed(2);
            console.log('Net Income: ', document.querySelector('#net').innerHTML = netNum);
        }

    }


//function to calculate tax
function calculateTax (deductNum){
    let minNum = 42705;
    let midNum = 85405;
    let maxNum = 103915;
    
    if (deductNum > minNum && deductNum <= midNum){
        return (20 / 100) * (deductNum  - minNum);
    }

    else if (deductNum > midNum && deductNum <= maxNum){
        var num1 = (20 / 100) * (midNum - minNum);
        var num2 = (24 / 100) * (deductNum - midNum);
        return num1 + num2;
    }

    else if (deductNum > maxNum){
        var num1 = (20 / 100) * (midNum - minNum);
        var num2 = (24 / 100) * (maxNum - midNum);
        var num3 = (25.75 / 100) * (deductNum - maxNum);
        return num1 + num2 + num3;
    }

    else {return 0;}
}
