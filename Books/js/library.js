//constructor for the library
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
