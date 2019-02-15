'use strict'

let myArray = [];

//add element to an array
function  push() {
  //check if number was entered
  let value = document.querySelector('#myId').value;
  if (isNaN(value)){
      console.log('Error. Please enter number');
      document.querySelector('#error').innerHTML =
      'Error. Please enter number';
  }
  else {
      console.log(value);
      myArray.push(value);
      console.log(myArray);
      showArray();
  }
}

//remove the last element from an array
function  pop() {
  myArray.pop();
  showArray();
}

// remove the first element from an array
function  shift() {
  myArray.shift();
  showArray();
}

//add one or more elements to the beginning of an array
function  unshift() {
  let value = document.querySelector('#myId').value;
  myArray.unshift(value);
  showArray();
}

//reverse an array
function  reverse() {
  myArray.reverse();
  showArray();
}

function showArray(){
  //add fancyList
  showFancyList();

  document.querySelector('#myList').innerHTML =
  '[' + myArray.join(',') + ']';
}

// return a shallow copy of a portion of a typed array
function slice(){
  let secArr = myArray.slice(1,myArray.length-1);
  showArrayCopy(secArr);
}

function showArrayCopy(input){
  document.querySelector('#myListCopy').innerHTML =
  '[' + input.join(',') + ']';
}

// sort the elements of an array
function sort(){
  myArray.sort(compareNumbers);
  showArray();
}

//compare numbers ascending
function compareNumbers(a, b){
  if(a < b){return -1;}
  if(b < a){return 1;}
  return 0;
}
//showArray();

//compare numbers descending
function compareNumbersDesc(a, b){
  if(a < b){return 1;}
  if(b < a){return -1;}
  return 0;
}

function showFancyList(){
  let str = '';
  for (let i = 0; i < myArray.length; i++){
    str += '<li>' + myArray[i] + '</li>\n';
    console.log(str);
  }

  document.querySelector('#myFancyList').innerHTML = str;
}

showFancyList();


//remove middle number(s) from an array
function removeMid(){
    //copy array
    let arrCopy = myArray.slice();
    let num = arrCopy.length;
    //if array length is even
    if (num % 2  == 0){
        let indx = (num/2)-1;
        //use splice to remove 2 num at specified index
        let removedNum = arrCopy.splice(indx, 2);
        showRemoveMid(arrCopy);
    }
    //if array lenth is odd
    else {
        let indx = (num/2);
        //use splice to remove 1 num at specified index
        let removedNum = arrCopy.splice(indx, 1);
        showRemoveMid(arrCopy);
    }
}

function showRemoveMid(arrCopy){
    document.querySelector('#removeMid').innerHTML =
    '[' + arrCopy.join(',') + ']';
}



function showFancyArray2(){
  let text = '';
//declare anonimus function in parameter
  myArray.forEach(function(item){
    text += '<li>' + myArray[i] + '</li>\n';
    console.log(item);
  });
  document.querySelector('#myFancyList').innerHTML = text;

}
