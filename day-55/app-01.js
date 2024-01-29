const arr =[1,3,30,10,2,89,45,32,90,67]

const number=100

const index=arr.indexOf(number)
 
function findIndex(arr1 ,index) {
   
     if(index !== -1){
        console.log(`${number}  Number is available`)
    }  
    else{
       // console.log(` ${number} Number is not available`)
      console.log(`${index}`)
    }
}
findIndex(arr,index);