function Airport (name, city, code){
  this.name = name;
  this.city = city;
  this.code = code;
}

let mtlAirport = new Airport('P.E. Trudeau', 'Montreal', 'YUL');
console.log(mtlAirport);

let lndAirport = new Airport('Heathrew', 'London', 'HWT');
console.log(lndAirport);
console.log(lndAirport.city);
console.log(lndAirport['code']);
