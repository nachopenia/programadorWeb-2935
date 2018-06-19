var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: 'Audi TT',
    brand: 'Audi',
    year: 2017
  },
  {
    model: 'Gran turismo',
    brand: 'Maserati',
    year: 2018
  }
]


function car(model, brand, year) {

  var id = Math.random()

  this.model = model
  this.brand = brand
  this.year = year

  this.getCarName = function () {
    var carName = 'MODELO ' + model + ' MARCA ' + brand + ' ANIO ' + year
    return carName
  }
}

var car

var newCars = []


for (var i = 0; i < cars.length; i++) {
  var car = new cars(cars[i].model, cars[i].brand, cars[i].year)

  newCars.push(car)
}
console.log(newCars[2].getCarName)
