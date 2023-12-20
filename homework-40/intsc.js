function findIntersection(arr1, arr2) {
    const array= arr1.filter(element => arr2.includes(element));

    return array;
}
const array1 = [1,2,3,4,5,6];
const array2 = [1,3,4,5,7,8];
const commonNumber = findIntersection(array1, array2)
console.log(commonNumber)
