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
  
  //method will print the small Thumbnail
  this.printSmallThumbnail = function(){
    this.books.forEach((book) => {
      console.log(book.smallThumbnail);
    });
  }
    
  //method will print the price 
  this.printAmount = function(){
      this.books.forEach((book) => {
          console.log(book.amount);
      });
  }
  
  //method will print an author
  this.printAuthors = function(){
    this.books.forEach((book) => {
      console.log(book.authors);
    });
  }
    
}

//console.log(books[1].volumeInfo.title);
//console.log(books[1].saleInfo.listPrice.amount);


//function sort(){
//    books.sort();
//    
////    let sorted = Object.keys(books.saleInfo.listPrice.amount).sort(function(a,b){return books[a].saleInfo.listPrice.amount-books[b].saleInfo.listPrice.amount});
////    console.log(sorted);
//    //if(books.saleInfo.listPrice){
//    
//    books.forEach(function(item){
//    //check if price is exist, if yes then create new book
//    if (item.saleInfo.listPrice){
//         item.sort((a, b) => (a.saleInfo.listPrice.amount > b.saleInfo.listPrice.amount) ? 1: -1);
//    //}
//        }
//    });
//   
//    for(let i = 0; i < books.length; i++){
//        console.log(books[i].saleInfo.listPrice.amount);
//    }
//    
//}

//sort();

//var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
//keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
//console.log(keysSorted);  

//
//function Library(books){
//    
//  this.books = books;
//    
////method printTitles prints the title of books    
//  this.printTitles = function(){
//    this.books.forEach((book) => {
//      console.log(book.title);
//    });
//  }
//  
//  //method printDescription prints the description of books 
//  this.printDescription = function(){
//    this.books.forEach((book) => {
//      console.log(book.Description);
//    });
//  }
//  
//}
//
//let myLib = new Library(books);
//console.log(myLib);
//
//
