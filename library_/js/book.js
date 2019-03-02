// constructor for the book
function Book(authors, title, pageCount, averageRating){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;

//method isPopular returns true, if the average rating is above 3
  this.isPopular = () => {
      if(this.averageRating >= 3){return true;}
      return false;
  }
  
  //method numberOfAuthors returns the number of authors
  this.numberOfAutors = () => {
      return this.authors.length;
  }
}
