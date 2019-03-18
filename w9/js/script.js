$(document).ready(function(){
  $("button").click(findBeer);
});

  function findBeer() {

    let city = getCityName();
    let name = getName();

    let urlStr = createURL(city, name);
    sendRequest(urlStr);
  }

  function getCityName() {
    let city = $('#city').val();
    return city;
  }

  function getName() {
    let name = $('#name').val();
    return name;
  }


  function createURL(city, name) {
    return `https://api.openbrewerydb.org/breweries?by_city=${city}&by_name=${name}`;
  }


  function showResult(list) {
    let result = '';
    list.forEach((item) => {
      result += `<div>
        <span>${item.name}</span><br/>
        <a href="${item.website_url}">${item.name}</a>
      </div>`
      // result += '<li>' + item.name + '</li>';
    });
    $("#beers").html(result);
  }

  function showBooks (library) {
    let result = library.libaryToHTML();
    $("#beers").html(result);
  }

  function libaryToHTML() {
    let result = '';
    this.books.forEach((book) => {
      result += book.bookToHTML();
    });
    return result;
  }

  function bookToHTML () {
    return `<div>
      <span>${item.name}</span><br/>
      <a href="${item.website_url}">${item.name}</a>
    </div>`
  }

  function sendRequest(urlStr) {
    // var oReq = new XMLHttpRequest();
    // oReq.addEventListener("load", reqListener);
    // oReq.open("GET", urlStr);
    // oReq.send();
    $.ajax({
      type: 'GET',
      url: urlStr,
      success: showResult,
      error: function() {
        console.log('failed')
      }
    })

  }
