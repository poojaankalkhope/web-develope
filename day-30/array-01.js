const fruits = ['apple', 'banana' , 'orange', 'mango']//literal
console.log(fruits)

const colors = new Array('red', 'green', 'blue') // constructor
console.log(colors)

console.log(`Accessing Elements`)
console.log(`Fruits 0th Element ${fruits[0]}`)
console.log(`colors 1st Element ${colors[1]}`)

console.log(`Length Property`)
console.log(`Friuts Length :${fruits.length}`)
console.log(`colors Length :${colors.length}`)

console.log(`Modifying Existing Elements`)
console.log(fruits)
fruits[0]='grapes'
console.log(fruits)
console.log(colors)
colors[1]='yellow'
console.log(colors)

console.log(`Adding New Elements`)
console.log(fruits)
fruits.push('apple') // at the end
console.log(fruits)
fruits.unshift('kiwi') // at the start
console.log(fruits)
fruits[6]='papaya' // using direct index
console.log(fruits)

console.log(colors)
colors.push('cyan') 
console.log(colors)

console.log(`removing Elements`)
console.log(fruits)
const poppedFruit =fruits.pop() // at the end
console.log(fruits)
console.log(`${poppedFruit} is popped.`)
const shiftedFruit =fruits.shift() // at the start
console.log(fruits)
console.log(`${shiftedFruit} is shifted.`)
const splicedFruit =fruits.splice(4,2) 
console.log(fruits)
console.log(`${splicedFruit} is spliced.`)

const slicedFruites = fruits.slice(2,4) // start from 2nd and end on 4-1
console.log(fruits)
console.log(slicedFruites)

console.log(colors)
const removedColor = colors.pop()
console.log(colors)
console.log(`${removedColor} is removed`)
