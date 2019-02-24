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
        let title = '';
        let arrayNum = [];
        
        //create array
        books.forEach(function(book){
            if(book.volumeInfo.pageCount){
                arrayNum.push(book.volumeInfo.pageCount);
            }
        });
        
        //find min number
        let min = Math.min(...arrayNum);
        //console.log(min);
        
        //find book with min number 
        books.forEach(function(book){
            if(book.volumeInfo.pageCount == min){
                title = book.volumeInfo.title;
            }
        });
        
        return title;
}

console.log("Find shortest: " + findShortest());


function aboveThree() {
      let result = [];
        // push the title of the books where rating >= 3
//        for(let i = 0; i < books.length; i++){
//            if (books[i].volumeInfo.averageRating >= 3){
//                result.push(books[i].volumeInfo.title);
//            }
//        }
        
        //or with forEach
        
        books.forEach(function(book){
            if (book.volumeInfo.averageRating >= 3){
                result.push(book.volumeInfo.title);
            }
        });
        
        
      return result;
}

//console.log(aboveThree());
let abThree = aboveThree();
console.log('Find books with average rating >= 3: '); 
            abThree.forEach(function(title){
                console.log(title + '\n');
});


function findAuthors () {
        let result = {};
        
//        for (let i = 0; i < books.length; i++){
//            let name = books[i].volumeInfo.title;
//            let author = books[i].volumeInfo.authors;
//            result[name] = author;
//        }
        
        //or forEach
        
        books.forEach(function(book){
            let bookName = book.volumeInfo.title;
            let author = book.volumeInfo.authors;
            //assign name to the key and add value
            result[bookName] = author;            
        });

      return result;
}

console.log('Find Authors: ');
let fAutors = findAuthors ();
console.log(fAutors);


//console.log(_.minBy(books, 'pageCount'));

//https://lodash.com/docs/

//Example

//var objects = [{ 'n': 1 }, { 'n': 2 }];
//
//_.minBy(objects, function(o) { return o.n; });
//// => { 'n': 1 }
//
//// The `_.property` iteratee shorthand.
//_.minBy(objects, 'n');
//// => { 'n': 1 }
//
//_.multiply(multiplier, multiplicand)
