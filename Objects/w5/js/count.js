function countLetters(myString) {
  let result = {};
  for (var i = 0; i < myString.length; i++) {
    let myChar = myString.charAt(i);
    console.log('myChar is ', myChar);
    if (result[myChar] === undefined) {
      result[myChar] = 1;
    } else {
      result[myChar] += 1;
    }
  }

  return result;
}

function check() {
  // get the value from html
  let myString = document.querySelector('#myInput').value;
  // calculate
  let v1 = countLetters(myString);
  // inject the result
  document.querySelector("#result").innerHTML =
  JSON.stringify(v1);
}

// console.log(countLetters('apple'));
/* {
  a: 1,
  p: 2,
  l: 1,
  e: 1
}*/
// console.log(countLetters('banana'));
/* {
  a: 3,
  n: 2,
  b: 1
}*/
