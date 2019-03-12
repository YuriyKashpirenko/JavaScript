'use strict'

function reqListener(){
  console.log(this.responseText);
}

function findBeer(){
//create result array
  let result=[];
    
//filter by city and name
  let city = document.querySelector('#city').value;
  let name = document.querySelector('#name').value;
//create request
  var req = new XMLHttpRequest();

  req.onreadystatechange = function(){
    //check if response is good 
    if(this.readyState === 4 && this.status === 200){
      console.log(JSON.parse(this.responseText));
    //decode from JSON and assign value to result array
      result = JSON.parse(this.responseText);
        
    //create bar array
      let barArray = []; 
      
      result.forEach(function(brewery){
          //check if bar has website and address
          if(brewery.website_url, brewery.street){
              barArray.push(brewery.name);
              barArray.push(brewery.website_url);
              barArray.push(brewery.street);
              barArray.push(brewery.city);
              barArray.push(brewery.state);
          }
          
      });
        
    //print bar
      function printBar(){
          let str = '';
          
          for (let i = 0; i < barArray.length; i++){
            str += '<p>' + barArray[i] + '</p>\n';
            console.log(str);
          }
          
          document.querySelector('#bar').innerHTML = str; 
      }      

     printBar();  
   

    }
  }

  req.open("GET", "https://api.openbrewerydb.org/breweries?by_city=" + city +
  "&by_name=" + name);
  req.send();

}

