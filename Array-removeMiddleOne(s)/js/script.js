'use strict'

let array = [];

//add element to array
function push(){
    let elem = document.querySelector('#input').value;
    array.push(elem);
    showArray();
    copyArray();
}

function showArray(){
    document.querySelector('#array').innerHTML = 
    '[' + array.join(',') + ']';
}

//remove middle number(s)
function removeMid(){
    //copy array
    let arrCopy = array.slice();
    let num = arrCopy.length;
    //if array length is even
    if (num % 2  == 0){
        let indx = (num/2)-1;
        //use splice to remove 2 num at specified index
        let removedNum = arrCopy.splice(indx, 2);
        showArrayCopy(arrCopy);
    }
    //if array lenth is odd
    else {
        let indx = (num/2);
        //use splice to remove 1 num at specified index
        let removedNum = arrCopy.splice(indx, 1);
        showArrayCopy(arrCopy);
    }
}

function showArrayCopy(arrCopy){
    document.querySelector('#arrayCopy').innerHTML = 
    '[' + arrCopy.join(',') + ']';
}





