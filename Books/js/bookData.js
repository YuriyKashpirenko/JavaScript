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
    let urlLink = createURL();
    sendRequest(urlLink);
}

//function get book name from search input
function getBook(){
    let book = $('#bookName').val();
    return book;
}

//function to create url link
function createURL(){
    return 'https://www.googleapis.com/books/v1/volumes?q=${book}';
}


//create books array and assign value to this array from 
//function 'returnBooks' which returns list of book items
let books = [];
function returnBooks(items){
    //books = Object.values(items);
    books = items;
    console.log(books);
}

console.log(books);

//function to send request and get response 
function sendRequest(urlLink){
     $.ajax({
         type:'GET',
         url:urlLink, 
         success: returnBooks,
         error: function(){console.log('failed');}
     });
 }


