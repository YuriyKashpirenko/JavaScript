'use strict'

let myObject = new Object();

let myOtherObject = {
  'color': 'blue',
  'the-size': 12,
  size: null,
  authors: ['A' , 'B'],
  address: {
    postalCode: 'H2H 2H2',
    streetNumber: 123
  },
};

function printValue(myKey) {
  console.log(myOtherObject[myKey]);
}

printValue('size');
printValue('address');

// console.log(myOtherObject.the-size) ERROR
console.log(myOtherObject['the-size'])

myOtherObject.name = 'Cup';
myOtherObject.color = 'RED';
console.log( myOtherObject.address.streetNumber);
console.log( myOtherObject.authors[1]);
console.log(myOtherObject.size);
console.log(myOtherObject.address.post);
console.log(myOtherObject['address']);
console.log(myOtherObject.address);

console.log( myOtherObject.address.streetNumber);
console.log( myOtherObject.address['streetNumber']);
console.log( myOtherObject['address']['streetNumber']);
console.log( myOtherObject['address'].streetNumber);
