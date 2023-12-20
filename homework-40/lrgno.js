 function largeElement(arr){
    if(arr.length===0){
        console.log('array is empty');
    }

    let max=arr[0];
 
 for(let i=1; i<arr.length; i++){
    if(arr[i] > max) {
        max = arr[i];
    }
 }

 return max;

}

const array=[1,2,3,4,5];
const largeNo=largeElement(array);
console.log('largest Element of Array',largeNo);