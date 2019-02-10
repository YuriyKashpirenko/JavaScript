'use strict'

//let myArray = [5,2,1,10,-32];
let myArray = [];

//add element to an array
function  push() {
  //check if number was entered
  let value = document.querySelector('#myId').value;
  if (isNaN(value)){
      console.log('Error. Please enter number');
      document.querySelector('#error').innerHTML = 'Error. Please enter number';
  }

  console.log(value);
  myArray.push(value);
  console.log(myArray);
  showAray();
}

function showAray(){
  document.querySelector('#myList').innerHTML = myArray.toString();
}

//remove the last element from an array
function  pop() {
  myArray.pop();
  showAray();
}

// remove the first element from an array
function  shift() {
  myArray.shift();
  showAray();
}

//add one or more elements to the beginning of an array
function  unshift() {
  let value = document.querySelector('#myId').value;
  myArray.unshift(value);
  showAray();
}

//reverse an array
function  reverse() {
  myArray.reverse();
  showAray();
}

function showAray(){
  //add fancyList
  showFancyList();

  document.querySelector('#myList').innerHTML = '[' +
  myArray.join(',') + ']'
  ;
}

// return a shallow copy of a portion of a typed array
function slice(){
  let secArr = myArray.slice(1,myArray.length-1);
  showArayCopy(secArr);
}

function showArayCopy(input){
  document.querySelector('#myListCopy').innerHTML = '[' +
  secArr.join(',') + ']'
  ;
}


function removeMid (){

}

// sort the elements of an array
function sort(){
  myArray.sort(compareNumbers);

  showAray();
}

//compare numbers ascending
function compareNumbers(a, b){
  if(a < b){return -1;}
  if(b < a){return 1;}
  return 0;
}
showAray();

//compare numbers descending
function compareNumbersDesc(a, b){
  if(a < b){return 1;}
  if(b < a){return -1;}
  return 0;
}

function showFancyList(){
//  let text = '<li>Hello</li>\n<li>Hello</li>\n';

  let str = '';
  for (let i = 0; i < myArray.length; i++){
    str += '<li>' + myArray[i] + '</li>\n';
    console.log(str);
  }

  document.querySelector('#myFancyList').innerHTML = str;

}

showFancyList();

var aray1 = ['a', 'b', 'c'];
let str = '';
function create(element){
  str += '<li>' + element + '</li>\n';
}
array1.forEach(Create);
console.log(str);
