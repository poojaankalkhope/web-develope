const arr =[1,3,30,10,2,89,45,32,90,67]

const number=30

const index=arr.indexOf(number)
 
function findIndex(arr1 ,index) {
   
     if(index !== -1){
        console.log(`${number}  Number is available at ${index} position`)
    }  
    else{
      
      console.log(`${index}`)
    }
}
findIndex(arr,index);