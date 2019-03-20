//transform data and create an object
let googleBooks = [];

//books defined in bookData.js
books.forEach(function(item){
    //check if price is exist, if yes then create new book
    if (item.saleInfo.listPrice){
    let temp = new Book(item.volumeInfo.title,
                        item.volumeInfo.description,
                        item.volumeInfo.imageLinks.smallThumbnail,
                        item.saleInfo.listPrice.amount,
                        item.volumeInfo.authors);
    googleBooks.push(temp);
    }
});

let lib = new Library(googleBooks);

//library
console.log('Print titles: ');
lib.printTitles();

console.log('Print description: ');
lib.printDescription();

console.log('Print smallThumbnail: ');
lib.printSmallThumbnail();

console.log('Print price: ');
lib.printAmount();

console.log('Print authors: ');
lib.printAuthors();



//console.log(books[0].volumeInfo.imageLinks.smallThumbnail);
//console.log(books[1].saleInfo);