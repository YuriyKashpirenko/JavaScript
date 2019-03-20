// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];
books.forEach(function(item) {
  //check if price is exist, if yes then create new book
  if (item.saleInfo.listPrice){
          // Book constructor is in book.js
          let temp = new Book(item.volumeInfo.title,
                              item.volumeInfo.description,
                              item.volumeInfo.imageLinks.smallThumbnail,
                              item.saleInfo.listPrice.amount,
                              item.volumeInfo.authors,);
          myBooks.push(temp);
  }

});

let myLibrary = new Library(myBooks);

//for each book
myBooks.forEach(function(book){
    if(book.authors){
        console.log(
            'Title: ' + book.title +
            '\n Description:' + book.description +
            '\n Thumbnail: ' + book.smallThumbnail +
            '\n Price: ' + book.amount +
            '\n Authors: ' + book.authors
                   );
    }
});


//library
console.log('Print Titles: ');
myLibrary.printTitles();

console.log('Print Authors: ');
myLibrary.printAuthors();





