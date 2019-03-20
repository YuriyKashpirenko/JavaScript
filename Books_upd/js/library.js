//constructor for the library
function Library (books){
  this.books = books;
    
//method printTitles prints the “title” of books    
  this.printTitles = function(){
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }
  
  //method printAuthors prints the “authors” of the books
  this.printAuthors = function(){
    this.books.forEach(function(book){
    //check if book has an author
    if(book.authors){
      console.log(book.authors.join('\n'));
        }
    });
  }

}
