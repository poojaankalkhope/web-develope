

// calculate the age from given date
 
 const calcAge = (birthDate) => {
 const diff = new Date()-birthDate
const inMs = new Date(diff)
const age = Math.abs(inMs.getFullYear()-1970)
return age
}

console.log(calcAge(new Date('2020-01-01')))

 