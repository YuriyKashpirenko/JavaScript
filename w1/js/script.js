//console.log('Hello');
//alert("Bye");
var myName = 'yuriy';
let temp = 12;
const DAYS_IN_JAN = 31;

//console.log(myName);

let a = false;
let b ='';
let sum = a ** b;
//console.log(a, b, sum);

let result = (a === b);
//console.log('result: ', result);
//console.log('type of result is: ', typeof result);

result = 12;
//console.log('type of result is: ', typeof result);
//Lint - rules convention

//age
let content = document.getElementById('myAge').innerHTML.trim();
console.log('My age', content);

//month
let age = parseInt(
  document.getElementById('myAgeInMonths').innerHTML.trim()
);
let month = (age + content) * 12;
console.log('by month', document.getElementById('myAgeInMonths').innerHTML = month);

//day
let byDay = parseInt(
  document.getElementById('myAgeInDays').innerHTML.trim()
);
let day = (age + content) * 365;
console.log('by day', document.getElementById('myAgeInDays').innerHTML = day);
