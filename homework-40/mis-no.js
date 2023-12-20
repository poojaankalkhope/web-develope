function findMissingNo(arr){
    if(arr.length===0){
        console.log('array is empty');
    }

    const num= arr.length +1;
    const sum = num*(num+1)/2;

   const  actualSum = arr.reduce((sum,num) => sum + num, 0);

   const missingNumber= sum- actualSum;
    return missingNumber;
}
const array = [1,2,3,5,6,7,8];
const missingNumber = findMissingNo(array);
console.log('Missing no is', missingNumber)