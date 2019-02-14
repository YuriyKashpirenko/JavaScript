'use strict'

//function will be triggered when user clicks the submit button
function calculate (){
	let salaryStr = document.getElementById('salary').value;
	//error message in the html if the user enters a NaN (not a number)
	if(isNaN(salaryStr)){
		console.log(
		document.querySelector('#error').innerHTML = 
		salaryStr + 'is not a number');
	}
	else {
        //get the entered salary and call the `calculateTax`
		let salary = Number(salaryStr);
		calculateTax(salary);
	}
}

//find the tax and net salary
function calculateTax (salary){
    let minNum = 42705;
    let midNum = 85405;
    let maxNum = 103915;
    
    let taxNum = 0;
    let netNum = 0;
    
    //$42,705 to $85,405 → 20%
    if (salary > minNum && salary <= midNum){
        taxNum = (20 / 100) * (salary  - minNum);
    }
    
    //$85,405 to $103,915 → 24%
    else if (salary > midNum && salary <= maxNum){
        var num1 = (20 / 100) * (midNum - minNum);
        var num2 = (24 / 100) * (salary - midNum);
        taxNum = num1 + num2;
    }
    
    //More than $103,915 → 25.75%
    else if (salary > maxNum){
        var num1 = (20 / 100) * (midNum - minNum);
        var num2 = (24 / 100) * (maxNum - midNum);
        var num3 = (25.75 / 100) * (salary - maxNum);
        taxNum = num1 + num2 + num3;
    }

    else {taxNum;}
    
    //results with 2 decimal places
    let tax = taxNum.toFixed(2);
    
    //print tax, net salary, and use query selector
    console.log('Deductions: ', 
                document.querySelector('#tax').innerHTML = tax);
            
    netNum = (salary - tax).toFixed(2);
    console.log('Net Income: ', 
                document.querySelector('#net').innerHTML = netNum);
}

//clear the error on new input
function clearInput(){
    document.querySelector('#error').innerHTML = '';
}