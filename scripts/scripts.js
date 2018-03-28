$(document).ready( function () {


var vehicle1 = {
    manufacturer: "Nissan",
    model: "Altima",
    year: 2010,
    miles: 40000,
    renter: "The Boss",
    value: 35000
  };

var vehicle2 = {
    manufacturer: "Toyota",
    model: "Supra",
    year: 1998,
    miles: 14229,
    renter: "Bill Hicks",
    value: 120000
  };

var vehicle3 = {
    manufacturer: "Lamborghini",
    model: "Aventador",
    year: 2017,
    miles: 45000,
    renter: "George Carlin",
    value: 506300
  };

var vehicle4 = {
    manufacturer: "Datsun",
    model: "250z",
    year: 1972,
    miles: 50000,
    renter: "Jade Manrique",
    value: 42522
  };

var vehicle5 = {
    manufacturer: "Audi",
    model: "S3",
    year: 2018,
    miles: 13000,
    renter: "Alex Gibbons",
    value: 43650
  };

let myFleet = [];

myFleet.push(vehicle1, vehicle2, vehicle3, vehicle4, vehicle5);

var fullString = "Model: ";

for (var i = 0; i < myFleet.length; i++) {
  fullString = fullString + myFleet[i].model + ", ";
}


$("#car-display").html(fullString);



});
