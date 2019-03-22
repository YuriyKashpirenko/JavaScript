let myLibrary = new Library([]);


//sort books by price in ascending order
function pr_asc(){
    console.log('Sort by Price Asc');
    myLibrary.sortByPriceAsc();
    highlightWords();
}

//sort books by price in descending order
function pr_desc(){
    console.log('Sort by Price Desc: ');
    myLibrary.sortByPriceDesc();
    highlightWords();
}

//sort books  based on the title alphabetically
function titleAlphabet(){
    console.log('Sort Books by Title Alphabetically: ');
    myLibrary.sortTitleAlphabet();
    highlightWords();
}
