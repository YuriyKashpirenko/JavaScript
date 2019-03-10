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
        
//      let bar_obj = {};
      //let barName = '';
        let barName = [];
//      let barWebsite = '';
//      let barStreet = '';
//      let barCity = '';
//      let barState = '';
//      let barPostCode = '';
      
      result.forEach(function(brewery){
//          bar_obj.name = brewery.name;
//          bar_obj.website = brewery.website_url;
          if(brewery.name, brewery.website_url, brewery.street, brewery.city, brewery.state){
//              barName += brewery.name + ' \n' + brewery.website_url;
//              ;
              
              barName.push(brewery.name);
              barName.push(brewery.website_url);
              barName.push(brewery.street);
              barName.push(brewery.city);
              barName.push(brewery.state);
//              barWebsite += brewery.website_url;
//              barStreet += brewery.street;
//              barCity += brewery.city;
//              barState += brewery.state;
          }
          
          
//        document.querySelector('#br_name').innerHTML = 'Name: ' + brewery.name;
//        document.querySelector('#website').innerHTML = 'Website: ' + brewery.website_url;
//        document.querySelector('#street').innerHTML = 'Street: ' + brewery.street;
//        document.querySelector('#in_city').innerHTML = 'City: ' + brewery.city;
//        document.querySelector('#state').innerHTML = 'State: ' + brewery.state;
//        document.querySelector('#postCode').innerHTML = 'Postal code: ' + brewery.postal_code;
      });
      
//        for(let i = 0; i < barName.length; i++){
//            document.querySelector('#br_name').innerHTML = barName[i];
//        }
     document.querySelector('#br_name').innerHTML = barName;   

      //document.querySelector('#website').innerHTML = barWebsite;    

    }
  }

  req.open("GET", "https://api.openbrewerydb.org/breweries?by_city=" + city +
  "&by_name=" + name);
  req.send();


}

//    <div id = 'br_name'></div>
//    <div id = 'website'></div>
//    <div id = 'street'></div>
//    <div id = 'in_city'></div>
//    <div id = 'state'></div>  
//    <div id = 'postCode'></div>  
