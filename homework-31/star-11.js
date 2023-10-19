for(let i=1 ; i<=5; i++){
    let str = '';
    for(let j=1; j<=9; j++) {
        if(j>=6-i && j<=4+i ) {
            str += '*';
        }
        else {
            str += ' ';
        }
         
    }
    console.log(str)
}