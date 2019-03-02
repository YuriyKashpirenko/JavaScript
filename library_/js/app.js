// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];
books.forEach(function(item) {
  // Book constructor is in book.js
  let temp = new Book(item.volumeInfo.authors,
                      item.volumeInfo.title,
                      item.volumeInfo.pageCount,
                      item.volumeInfo.averageRating);
  myBooks.push(temp);
});

let concordiaLibrary = new Library(myBooks);

//book
console.log(myBooks[2].title);
console.log(myBooks[2].isPopular());
console.log(myBooks[2].numberOfAutors());

//library
console.log('Print Titles: ');
concordiaLibrary.printTitles();

console.log('Print Authors: ');
concordiaLibrary.printAuthors();

console.log('Find Shortest: ');
console.log(concordiaLibrary.findShortest());

let findGoodBooks = concordiaLibrary.findGoodBooks();
console.log('Find good sbooks with average rating >= 3: '); 
findGoodBooks.forEach(function(title){
    console.log(title + '\n');
});

console.log('Find Authors: ');
console.log(concordiaLibrary.findAuthors());






