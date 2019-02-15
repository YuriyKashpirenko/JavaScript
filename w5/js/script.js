let test; //undefined
console.log(test);

let myObject = new Object();
let myOtherObject = {
  color: 'blue',
  'the-size': 12,
  size: null,
  authors: ['A', 'B'],
  address: {
    postalCode: 'H2H 2H2',
    streetNumber: 123
  }

};

myOtherObject.name = 'Cup';
myOtherObject.color = 'RED';

//console.log('myObject', typeof myObject, myObject);
console.log(myOtherObject);
console.log(myOtherObject.address.streetNumber);
console.log(myOtherObject.address['streetNumber']);
console.log(myOtherObject['address']['streetNumber']);
console.log(myOtherObject['address'].streetNumber);

console.log(myOtherObject.authors[1]);
console.log(myOtherObject['address']);
console.log(myOtherObject.address);

console.log();


function addText(){
  let value = document.querySelector('#myId').value;
  var res = JSON.stringify(countLetters(value));
  console.log(
		document.querySelector('#message').innerHTML = res);
}


function countLetters(myString){
  let result = {};
  for(let i = 0; i < myString.length; i++){
    let char = myString.charAt(i);
    if (result[char] == undefined){result[char] = 1;}
    else {result[char] += 1;}
  }
  return result;
}

console.log(countLetters('apple'));
