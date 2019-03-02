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
    // if(book.volumeInfo.authors !== undefined){
    //or
    if(book.authors){
      console.log(book.authors.join('\n'));
        }
    });
  }
  
  //method findShortest returns the title of the book with 
  //the minimum number of “pageCount”
  this.findShortest = function(){
     let title = '';
     let arrayNum = [];
        
     //create array
     this.books.forEach(function(book){
         if(book.pageCount){
             arrayNum.push(book.pageCount);
         }
     });
        
     //find min number
     let min = Math.min(...arrayNum);

     //find book with min number 
     this.books.forEach(function(book){
         if(book.pageCount == min){
             title = book.title;
         }
     });

     return title;
  }
  
//method findGoodBooks returns an array with books title where averageRating >= 3
  this.findGoodBooks = function (){
    let result = [];
    this.books.forEach(function(book){
        if (book.averageRating >= 3){
            result.push(book.title);
        }
    });
    
    return result;         
  }
  
//method findAuthors  returns an object where the keys are the name of the books
//and the values are an array consisting the authors of that book  
  this.findAuthors = function(){
      let result = {};
      this.books.forEach(function(book){
        //check if book has the author
        if(book.authors){
            let bookName = book.title;
            let author = book.authors;
            //assign name to the key and add value
            result[bookName] = author;             
        } 
      });

      return result;
  }
  
}
