function removeduplicate(arr){
    const uniqueSet = new Set(arr);

    const array = [...uniqueSet];

    return array;

}
const duplicateNumber = [1,2,3,4,1,5,6,2,8,5,3];
const removeDuplicateNo = removeduplicate(duplicateNumber);
console.log(removeDuplicateNo)