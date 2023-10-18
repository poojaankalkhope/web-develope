for(let i=1 ; i<=5; i++){
    for(let j=1; j<=9; j++) {
        if(j>=6-i && j<=4+i ) {
            console.log("*")
        }
        else {
            console.log(" ")
        }
         
    }
    console.log('\n')
}