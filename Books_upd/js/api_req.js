'use strict'

//when document(site) is ready/downloaded 
//if there was a click on button, then execute findBook function
$(document).ready(function(){
  $("button").click(findBook);
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


//create books array and assign value to this array from 
//function 'returnBooks' which returns list of book items
let books = [];
//let books = function returnBooks(items){
function returnBooks(items){
    //books = items;
    let booksTemp = Object.values(items);
    books = booksTemp.slice();
    //console.log(books);

}

//console.log(books);

//function to send request and get response 
function sendRequest(urlLink){
     $.ajax({
         type:'GET',
         url:urlLink, 
         //success: function(){console.log(returnBooks)},
         success: function(){console.log(books);},
         error: function(){console.log('failed');}
     });
 }


