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
  
  //method will print the price 
  this.printAmount = function(){
      this.books.forEach((book) => {
          console.log(book.amount);
      });
  }
      
  console.log(this.books[0].amount);
  //method will sort books price in ascending order
  this.sortByPriceAsc = function(){
//      if(this.books.amount != null){
          this.books.sort(function(a,b){
          return a.amount-b.amount;
      });
      //}

      //if amount is null then push object to the end
      if(this.books.amount == null){this.books.push();}
      //print books on webpage (method in app.js)
      printBooks();
      //print books price in dev. console
      this.printAmount();
  }
  
  //method will sort books price in descending order 
  this.sortByPriceDesc = function(){
      this.books.sort(function(a,b){
          return b.amount-a.amount;
      });
      //print books on webpage (method in app.js)
      printBooks();
      //print books prices in dev. console
      this.printAmount();
  }
  
  //method will sort books based on the title (alphabetically)
  this.sortTitleAlphabet = function(){
      this.books.sort(function(a,b){
          let titleA = a.title.toLowerCase();
          let titleB = b.title.toLowerCase();
          //sort in ascending order
          if(titleA < titleB){return -1;}
          if(titleA > titleB){return 1;}
          //return default value with
          return 0;
      });
      //print books on webpage (method in app.js)
      printBooks();
      //print books titels in dev. console
      this.printTitles();
  }
  
}
