'use strict'

//test
var array1 = [2, 3, 1];
console.log(Math.min(...array1));
console.log();

let books =
    [{
        "volumeInfo": {
            "authors": ["Richard A. Spencer"],
            "averageRating": 2.5,
            "categories": ["Literary Criticism"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=7HgwCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=7HgwCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 324,
            "publishedDate": "2015-07-11",
            "publisher": "McFarland",
            "subtitle": "Greek and Roman Allusions in J.K. Rowling’s Modern Epic",
            "title": "Harry Potter and the Classical World"
        }
    }, {
        "volumeInfo": {
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=N3Ypq7AqtxQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=N3Ypq7AqtxQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "publisher": "SIU Press",
            "title": "Harry Truman and Civil Rights"
        }
    }, {
        "volumeInfo": {
            "authors": ["Andrew Blake"],
            "averageRating": 4,
            "categories": ["Literary Criticism"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=Aaug_RnI-xQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 118,
            "publishedDate": "2002",
            "publisher": "Verso",
            "title": "The Irresistible Rise of Harry Potter"
        }
    }, {
        "volumeInfo": {
            "authors": ["Lana A. Whited"],
            "averageRating": 4.5,
            "categories": ["Literary Criticism"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=iO5pApw2JycC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 418,
            "publishedDate": "2004",
            "publisher": "University of Missouri Press",
            "subtitle": "Perspectives on a Literary Phenomenon",
            "title": "The Ivory Tower and Harry Potter"
        }
    }, {
        "volumeInfo": {
            "authors": ["Ruthann Mayes-Elma"],
            "averageRating": 2.5,
            "categories": ["Literary Criticism"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=LiWrXUHgnL8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=LiWrXUHgnL8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 155,
            "publishedDate": "2006-01-01",
            "publisher": "Rowman & Littlefield",
            "subtitle": "Not All that Empowering",
            "title": "Females and Harry Potter"
        }
    }, {
        "volumeInfo": {
            "authors": ["Daniel H. Nexon", "Iver B. Neumann"],
            "averageRating": 4,
            "categories": ["Literary Criticism"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=DKcWE3WXoj8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 245,
            "publishedDate": "2006",
            "publisher": "Rowman & Littlefield",
            "title": "Harry Potter and International Relations"
        }
    }, {
        "volumeInfo": {
            "authors": ["Katie Nicholl"],
            "averageRating": 2.5,
            "categories": ["Biography & Autobiography"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=YAY0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=YAY0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 272,
            "publishedDate": "2018-03-20",
            "publisher": "Hachette Books",
            "subtitle": "Life, Loss, and Love",
            "title": "Harry"
        }
    }, {
        "volumeInfo": {
            "authors": ["Ingrid Seward"],
            "categories": ["Biography & Autobiography"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=jmKdOddurawC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=jmKdOddurawC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 310,
            "publishedDate": "2003",
            "publisher": "Arcade Publishing",
            "title": "William and Harry"
        }
    }, {
        "volumeInfo": {
            "authors": ["Ray Cooney", "Michael Cooney"],
            "averageRating": 5,
            "categories": ["Adoption"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=BkPTZSzWKpYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=BkPTZSzWKpYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 169,
            "publishedDate": "2007-01-01",
            "publisher": "Samuel French, Inc.",
            "subtitle": "A Comedy",
            "title": "Tom, Dick and Harry"
        }
    }, {
        "volumeInfo": {
            "authors": ["Julie-Anne Sykley"],
            "averageRating": 1,
            "categories": ["Juvenile Nonfiction"],
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=WV8pZj_oNBwC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "pageCount": 22, //268,
            "publishedDate": "2010",
            "publisher": "Interactive Publications",
            "title": "Harry Potter Power"
        }
    }];



    function printTitles() {
        for(let i = 0; i < books.length; i++){
            console.log(books[i].volumeInfo.title);
        }
    }

console.log("Print titles:");
//printTitles();
console.log();

    function printAuthors() {
        for(let i = 0; i < books.length; i++){
            console.log(books[i].volumeInfo.authors);
        }
    }

console.log("Print Authors:");
//printAuthors();
console.log();


    function findShortest() {
//        let book = '';
//        let num = books[0].volumeInfo.pageCount;
//        let min = 0;
//
//        //find min number of pages
//        for (let i = 0; i < books.length; i++){
//            //118 < 438
//            if (books[i].volumeInfo.pageCount < num){
//                num = books[i].volumeInfo.pageCount;
//                if (num >= min){min = num;}
//            }
//        }
//
//        //find book title
//        for(let j = 0; j < books.length; j++){
//            if (books[j].volumeInfo.pageCount == min){
//                book = books[j].volumeInfo.title;
//            }
//        }
//        return book;
        
        let title = '';
        let arrayNum = [];
        
        //create array
        books.forEach(function(book){
            if(book.volumeInfo.pageCount){
                arrayNum.push(book.volumeInfo.pageCount);
            }
        });
        
        //find min number
        let min = Math.min(...arrayNum);
        //console.log(min);
        
        //find book with min number 
        books.forEach(function(book){
            if(book.volumeInfo.pageCount == min){
                title = book.volumeInfo.title;
            }
        });
        
        return title;
        
    }

console.log();
//let bookName = findShortest();
console.log("Find shortest: " + findShortest());


    function aboveThree() {
      let result = [];
        // push the title of the books where rating >= 3
        for(let i = 0; i < books.length; i++){
            if (books[i].volumeInfo.averageRating >= 3){
                result.push(books[i].volumeInfo.title);
            }
        }
      return result;
    }

let abThree = aboveThree();
console.log('Find good books: '); 
            abThree.forEach(function(title){
                console.log(title + '\n');
});


    function findAuthors () {
      let result = {};
      /* {
        "Females and Harry Potter" : ["Ruthann Mayes-Elma"],
        "Harry Potter and International Relations":  ["Daniel H. Nexon", "Iver B. Neumann"],
      }*/
      return result;
    }
