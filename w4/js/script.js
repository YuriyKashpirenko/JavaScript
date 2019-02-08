'use strict'

//let myArray = [5,2,1,10,-32];
let myArray = [];

function  push() {
  let value = document.querySelector('#myId').value;
  if (value === undefined || value == null){console.log('Please enter number');}

  console.log(value);
  myArray.push(value);
  console.log(myArray);
  showAray();
}

function showAray(){
  document.querySelector('#myList').innerHTML = myArray.toString();
}

function  pop() {
  myArray.pop();
  showAray();
}

function  shift() {
  myArray.shift();
  showAray();
}

function  unshift() {
  let value = document.querySelector('#myId').value;
  myArray.unshift(value);
  showAray();
}

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

function slice(){
  let secArr = myArray.slice(1,myArray.length-1);
  showArayCopy(secArr);
}

function showArayCopy(input){
  document.querySelector('#myListCopy').innerHTML = '[' +
  myArray.join(',') + ']'
  ;
}


function removeMid (){

}

function sort(){
  myArray.sort(compareNumbers);

  showAray();
}

//compare numbers
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
