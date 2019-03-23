//constructor for the library
function Library (books){
  this.books = books;

//method printTitles prints the “title” of books
  this.printTitles = function(){
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }


  //method will print the price
  this.printAmount = function(){
      this.books.forEach((book) => {
          console.log(book.amount);
      });
  }

  //method will sort books price in ascending order
  this.sortByPriceAsc = function(){
          this.books.sort(function(a,b){
          return a.amount-b.amount;
      });
      //print books on webpage
      this.printBooks();
      //print books price in dev. console
      this.printAmount();
  }

  //method will sort books price in descending order
  this.sortByPriceDesc = function(){
      this.books.sort(function(a,b){
          return b.amount-a.amount;
      });
      //print books on webpage
      this.printBooks();
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
      //print books on webpage
      this.printBooks();
      //print books titels in dev. console
      this.printTitles();
  }


  //method to print books in webpage
  this.printBooks = function(){
    //check the book length in dev. console  
    console.log('books length: ' + this.books.length);

      let result = '';
      this.books.forEach(function(book){
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
          </p><br>
      </article>
      </br>`
      });

      document.querySelector('#g_books').innerHTML = result;
  }

}
