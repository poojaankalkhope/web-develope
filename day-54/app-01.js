c=1
//c=c+1
//console.log(c)
//console.log("Inc " + (c++) ) // c = c + 1
//console.log(c)

console.log("Inc " + (c++) ) // c = c + 1
console.log("C "+ c)
console.log("Dec " + (c--) ) // c = c - 1
console.log("C "+ c)
console.log('C' + (++c))
console.log('C' + (--c))
console.log('C' + (c++))
console.log("C"+ c)



// object key-value

let mySelf={}

 mySelf.name='abc',
mySelf.age= 28
mySelf.add=  '123 street lane' 
mySelf.gender='female'
console.log(mySelf)

let myVariable; 
console.log( myVariable || "default value")

let myVariableWithDefault= myVariable || 'default value'
console.log(myVariableWithDefault)




console.log(`OR || : ${true || false}`)
console.log(`OR || : ${true || true}`)
console.log(`OR || : ${0 || true}`)
console.log(` OR || : ${0 || false}`)
console.log(` OR || : ${0 || 1}`)
console.log(` OR || : ${1 || 'hello'}`)
console.log(` OR || : ${'hello' || 'bye bye'}`)
console.log(` OR || : ${'' || 'bye bye'}`)
console.log(` OR || : ${undefined || 'bye bye'}`)
console.log(`OR || : ${false || true}`)

 

function greet(name) {
    console.log("Hello, " + name + "!");
  }
  greet('abc')
  greet.language = "English";

// Accessing the function and its property
console.log(greet.language); 