function Flight (airline, depTime, arrTime, stops, priceInUSD, from, to, _class){
  this.airline = airline;
  this.depTime = depTime;
  this.arrTime = arrTime;
  this.stops = stops;
  this.priceInUSD = priceInUSD;
  this.from = from;
  this.to = to;
  this._class = _class;

  this.numberOfStops = function(){return this.stops.length;}
  this.priceinCAD = function(rate){return this.priceInUSD * rate;}
  this.duration = function(){return (this.arrTime - this.depTime) / (1000 * 60 * 60);}
  this.numberOfOvernights = function(){ return this.arrTime.getDate() - this.depTime.getDate();}
}
//console.log(myFancyFlight.numberOfStops());

let toAirport = new Airport('Peterson', 'Toronto', 'YVZ');

let myFancyFlight = new Flight(
'Air Canada',
new Date('2019-03-17T22:24:00'),
new Date('2019-03-18T03:24:00'),
[toAirport],
8500.58,
mtlAirport,
lndAirport,
'First Class'
);

console.log(myFancyFlight);
console.log(myFancyFlight.priceInUSD);
console.log(myFancyFlight.stops[0].name);
console.log(myFancyFlight.arrTime);
console.log(myFancyFlight.numberOfStops());
console.log(myFancyFlight.priceinCAD(1.32));
console.log(myFancyFlight.depTime.getHours());
console.log(myFancyFlight.duration());
console.log(myFancyFlight.numberOfOvernights());
