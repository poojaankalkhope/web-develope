function Vehicle(make, model) { //  parent -> constructor function
     this.make = make
     this.model = model
}

Vehicle.prototype.detailsVh = function() {
    return `make ${this.make} model ${this.model}`
}

const vh = new Vehicle('abc', '111')
console.log(vh.detailsVh())

function car(year, make, model) { // child -> constructor function
    Vehicle.call(this, make, model) // this is unknown to you
    this.year = year
}

car.prototype = Object.create(Vehicle.prototype) // actual inheritance is happening

car.prototype.detailCr = function () { // car is child
    return `Year ${this.year} Model ${this.model} Make ${this.make}`
}

const cr = new car(2002, 'SUV', '123')
console.log(cr.detailCr())