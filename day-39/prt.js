function car(speed, lights) { // constructor function
    this.speed = speed // properties
    this.lights = lights
}

car.prototype.isManual = false // properties

car.prototype.speedUp = function () {  // behaviours of methods
    this.speed = this.speed + 1
}

const cr1 = new car(100, 3)

console.log(`Speed is ${cr1.speed}`)
console.log(`Manual ${cr1.isManual}`)
cr1.speedUp()
console.log(`Speed is ${cr1.speed}`)