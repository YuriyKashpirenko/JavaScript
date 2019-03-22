'use strict'

//when document(site) is ready/downloaded
//if there was a click on button, then execute findBook function
$(document).ready(function(){
  $('#srButton').click(findBook);
});

//function to find books
function findBook(){
	//get book from input
    let book = getBook();
    //send request to url
    let urlLink = createURL(book);
    sendRequest(urlLink);
}

//function get book name from search input
function getBook(){
    let book = $('#bookName').val();
    return book;
}

//function to create url link
function createURL(book){
    return `https://www.googleapis.com/books/v1/volumes?q=${book}`;
}


// the logic to transform data and to create object
function returnBooks(res){
    myLibrary.books = [];
    res.items.forEach(function(item) {
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
              myLibrary.books.push(temp);
      }

    });
    //print each book on webpage
    myLibrary.printBooks();
    highlightWords();
}


//function to send request and get response
function sendRequest(urlLink){
     $.ajax({
         type:'GET',
         url:urlLink,
         success: returnBooks,
         error: function(){console.log('failed');}
     });
 }
