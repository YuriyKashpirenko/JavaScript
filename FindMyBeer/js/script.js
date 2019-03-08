'use strict'

function reqListener(){
  console.log(this.responseText);
}

function findBeer(){
  let result=[];

  let city = document.querySelector('#city').value;
  let name = document.querySelector('#name').value;
  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      console.log(JSON.parse(this.responseText));

      result = JSON.parse(this.responseText);

      result.forEach(function(brewery){
        document.querySelector('#myList').innerHTML = brewery.city;
      });

    }
  }

  req.open("GET", "https://api.openbrewerydb.org/breweries?by_city=" + city +
  "&by_name=" + name);
  req.send();


}

//  document.querySelector('#error').innerHTML =
//  'Error.';
