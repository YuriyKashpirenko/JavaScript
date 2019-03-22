// constructor for the book
function Book(title,
              description,
              smallThumbnail,
              amount,
              authors,
              previewLink
              ){
  this.title = title;
  this.description = description;
  this.smallThumbnail = smallThumbnail;
  this.amount = amount;
  this.authors = authors;
  this.previewLink = previewLink;
}

//highlight words, function defined in book.js
function highlightWords(){
  let book_name = $('#bookName').val();
  var context = document.querySelector(".context");
  var instance = new Mark(context);
  instance.mark(book_name);
}
