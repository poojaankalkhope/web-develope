for(let i=1 ; i<=5 ; i++){
let str= '';
for(let j=1 ; j<=9 ; j++){
    if(j>=i && j<=10-i){
        str += '*';
    }
    else{
        str += ' ';
    }
}
    console.log(str)
}