//transform data and create an object
let googleBooks = [];

//books defined in bookData.js
books.forEach(function(item){
    let temp = new Book(item.volumeInfo.title,
                        item.volumeInfo.description,
                        item.volumeInfo.imageLinks.smallThumbnail,
                        item.saleInfo.listPrice.amount,
                        item.volumeInfo.authors)
    
});

let lib = new Library(googleBooks);

//library
console.log('Print titles: ');
lib.printTitles();

console.log('Print description: ');
lib.printDescription();

//console.log(books[0].volumeInfo.imageLinks.smallThumbnail);
//console.log(books[1].saleInfo);