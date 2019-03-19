//constructor for the library
//let books = [];
//console.log(books);
//console.log(returnBooks());

function Library(books){
    
  this.books = books;
    
//method printTitles prints the title of books    
  this.printTitles = function(){
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }
  
  //method printDescription prints the description of books 
  this.printDescription = function(){
    this.books.forEach((book) => {
      console.log(book.Description);
    });
  }
  
}

let myLib = new Library(books);
console.log(myLib);


