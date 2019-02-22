'use strict'
//this js file is for logic and
//should be added after the books.js in the index.html

function printTitles() {
  for(let i = 0; i < books.length; i++){
    console.log(books[i].volumeInfo.title);
  }
}

//printTitles();


function printTitles1() {
books.forEach(function(book){
  console.log(book.volumeInfo.title);
})
}

//printTitles1();


function printAuthors() {
  for(let i = 0; i < books.length; i++){
      console.log(books[i].volumeInfo.authors);
  }
}

//printAuthors();

function printAuthors1() {
  books.forEach(function(book){
    console.log(book.volumeInfo.authors);
  })
}

//printAuthors1();

function printAuthors2() {
  books.forEach(function(book){
    // if(book.volumeInfo.authors !== undefined){
    //or
    if(book.volumeInfo.authors){
      console.log(book.volumeInfo.authors.join('\n'));
    }
  })
}

//printAuthors2();


function findShortest() {
  let book = '';
  let num = books[0].volumeInfo.pageCount;
  let min = 0;

  //find min number of pages
  for (let i = 0; i < books.length; i++){
      //118 < 438
      if (books[i].volumeInfo.pageCount < num){
          num = books[i].volumeInfo.pageCount;
          if (num >= min){min = num;}
      }
  }

  //find book title
  for(let j = 0; j < books.length; j++){
      if (books[j].volumeInfo.pageCount == min){
          book = books[j].volumeInfo.title;
      }
  }
  return book;
}

console.log("Find shortest: " + findShortest());


function aboveThree() {
  let result = [];
    // push the title of the books where rating >= 3
    for(let i = 0; i < books.length; i++){
        if (books[i].volumeInfo.averageRating >= 3){
            result.push(books[i].volumeInfo.title);
        }
    }
  return result;
}

 console.log(aboveThree());

function findAuthors () {
  let result = {};
  /* {
    "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
    "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
  }*/
  return result;
}
