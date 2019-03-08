function reqListener(){
  console.log(this.responseText);
}

function submit(){
  var req = new XMLHttpRequest();
  //req.addEventListener("load", reqListener);

  req.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      console.log(JSON.parse(this.responseText));
      //get the object text
      //console.log(this.responseText);
    }
  }

  req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=harry");
  req.send();
  //console.log('after');
}
