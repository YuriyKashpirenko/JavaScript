// constructor for the book
function Book(authors, title, pageCount, averageRating){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;

  this.isPopular = () => {
    return this.averageRating >= 3;
  }
  
  this.numberOfAutors = () => {
      
  }
}
