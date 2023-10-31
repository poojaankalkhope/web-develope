console.log(`simple If-Else`)

const num = 10

if(num >= 4) {
    console.log(`Number is smaller`)
} else {
    console.log(`Number is bigger`)
}

console.log(`If-Else Ladder`)

const marks = 50

if(marks >= 40) console.log(`pass`)
else if (marks >= 50 && marks <= 60) console.log(`Third class`)
else if (marks >= 60 && marks <= 70) console.log(`Second class`)
else if (marks >= 70 && marks <= 80) console.log(`First class`)
else if (marks >= 80 && marks <= 100) console.log(`Distinction`)
else console.log(`Invalid Marks`)

console.log(`Nested If-Else`) 

const cities = ['abc', 'pqr', 'lmn', 'xyz']
const currentCity = 'abc'

const streets = ['123', '345', '890', '456']
const address = '234,abc,aw'

if(cities.includes(currentCity)) {
    console.log(`yes you are in correct city`)
    
    const arrAddr = address.split(',')
    const zeroth = arrAddr[0]
    
    if(streets.includes(zeroth)){
        console.log(`yes have reached correct address`)
    }

 else {
    console.log(`correct city but your address is wrong`)
}
}