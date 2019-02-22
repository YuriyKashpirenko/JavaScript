function Person (theName){
  this.name = theName;
  this.greeting = function () {
    console.log('Hi, I\'m ' + this.name);
  }
}

let p3 = new Person('bob');
p3.greeting();
console.log(p3);

let p4 = new Person('mary')

//DEMO
// p3.greeting = function(){
//   console.log('Hi I am the new method');
// }
//
// p3.greeting();



function createNewPerson (name){
  let obj = {};
  obj.name = name;
  obj.greeting = function () {
    console.log('Hi, I\'m ' + name);
  }
  return obj;
}

let p1 = createNewPerson('sarah');
console.log(p1);
p1.greeting;

let p2 = createNewPerson('john');



function Book (authors, title, pageCount, averageRating){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;
  this.isPopular = function (){
    if(this.averageRating >=3){
      return true;
    }
    return false;
  };

  this.numberOfAuthors = function(){
    let num;
    if(this.authors){
      num = this.authors.length;
    }
    return num;

    //or
    //return this.authors ? this.authors.length : 0;
  };

  this.getShortTitle = function(){

  }


}

let b1 = new Book (['JK Rowling'], 'Harry Potter', 345, 5);
console.log(b1);
console.log(b1.isPopular());
console.log(b1.numberOfAuthors());

let b2 = new Book (books[0].volumeInfo.authors,
                   books[0].volumeInfo.title,
                   books[0].volumeInfo.pageCount,
                   books[0].volumeInfo.averageRating);
console.log(b2);

let b3 = new Book (booksList (books));

function booksList (books){
  for (let i = 0; i < books.length; i++){
    let temp = new Book (books[i].volumeInfo.authors,
                       books[i].volumeInfo.title,
                       books[i].volumeInfo.pageCount,
                       books[i].volumeInfo.averageRating);
    push(temp);
  }
}

console.log(b3);


books.forEach(function (item){
  let temp = new Book (item.volumeInfo.authors,
                     item.volumeInfo.title,
                     item.volumeInfo.pageCount,
                     item.volumeInfo.averageRating);
  myBooks.push(temp);
});

console.log(myBooks);
myBooks.forEach(function(book){
  console.log(book.isPopular());
});

//split, index of
