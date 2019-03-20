// constructor for the book
function Book(authors, title, pageCount, averageRating, amount){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;
  this.amount = amount;

  //method isPopular returns true, if the average rating is above 3
  this.isPopular = () => {
      if(this.averageRating >= 3){return true;}
      return false;
  }
  
  //method numberOfAuthors returns the number of authors
  this.numberOfAutors = () => {
      return this.authors.length;
  }
  
  //method returns the abbreviation of the title words
  //Example: “HPAIR” for “Harry Potter and International Relations”
  this.getShortTitle = () => {
      let str = '';
      //create an array
      let arr = this.title.split(' ');
      //find first character and add to the string
      arr.forEach(function(word){
          str += word.charAt(0);
      });
      return str.toUpperCase();
  }
}
