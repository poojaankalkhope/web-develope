function sortArrayAsc(arr){

    return arr.slice().sort((a,b) => a-b)
}
 


function sortArrayDsc(arr){

    return arr.slice().sort((a,b) => b-a)
}

const array=[2,4,6,7,89,64];

const ascendingNumber= sortArrayAsc(array);
console.log('in ascending order',ascendingNumber)
 
const descendingNumber= sortArrayDsc(array);
console.log('in descending order',descendingNumber)