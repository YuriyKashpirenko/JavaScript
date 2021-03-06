// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];

books.forEach(function(item) {
  //if price is undefined, then define price at 0
  if(item.saleInfo.listPrice == undefined){
        item.saleInfo["listPrice"] = {amount: null};
  }
    
  //check if price is exist, if yes then create new book
  if (item.saleInfo.listPrice){
          // Book constructor is in book.js
          let temp = new Book(item.volumeInfo.title,
                              item.volumeInfo.description,
                              item.volumeInfo.imageLinks.smallThumbnail,
                              item.saleInfo.listPrice.amount,
                              item.volumeInfo.authors,
                              item.volumeInfo.previewLink
                             );
          myBooks.push(temp);
  } 

});

let myLibrary = new Library(myBooks);


//preview in dev tools console: for each book 
myBooks.forEach(function(book){
    if(book.authors){
        console.log(
            'Title: ' + book.title +
            '\n Description:' + book.description +
            '\n Thumbnail: ' + book.smallThumbnail +
            '\n Price: ' + book.amount +
            '\n Authors: ' + book.authors + 
            '\n Preview link: ' + book.previewLink
                   );
    }
});

//print each book on webpage
function printBooks(){
    let result = '';
    myBooks.forEach(function(book){

    
    //create an article with book title, description, 
    //image, price, authors, and preview link
    result += 
    `<article>
        <h4>Title: ${book.title}</h4>
        <p>
            <img src="${book.smallThumbnail}" align="left">
            ${book.description}
        </p>
        
        <p>Price: ${book.amount}</p>
        <p>Authors: ${book.authors}</p>

        <p>
            Preview Link: 
            <a href="${book.previewLink}" target="_blank">${book.previewLink}</a>
        </p>
    </article>
    </br>`        
    });
 
    document.querySelector('#g_books').innerHTML = result;
}

printBooks();

//highlight words
var context = document.querySelector(".context");
var instance = new Mark(context);
instance.mark("Harry Potter");

//sort books by price in ascending order
function pr_asc(){
    console.log('Sort by Price Asc');
    myLibrary.sortByPriceAsc();
}

//sort books by price in descending order
function pr_desc(){
    console.log('Sort by Price Desc: ');
    myLibrary.sortByPriceDesc();
}

//sort books  based on the title alphabetically
function titleAlphabet(){
    console.log('Sort Books by Title Alphabetically: ');
    myLibrary.sortTitleAlphabet();
}


//library
console.log('Print Titles: ');
myLibrary.printTitles();

//console.log('Print Authors: ');
//myLibrary.printAuthors();

console.log('Print Not Sorted Price(Amount): ');
myLibrary.printAmount();









