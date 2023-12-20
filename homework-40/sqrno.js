function squareArray(arr){
    if(arr.length===0){
        console.log('array is empty');
    }


 const squareNumber=arr.map ( num => num* num)
    return squareNumber;
 }

 const number=[2,4,5,7,8];
 const square=squareArray(number);
 console.log('squared element is', square)