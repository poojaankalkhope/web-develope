
for(let i=1 ; i<=5; i++)
{
    let str = '';
    
    for(let j=1; j<=5; j++) 
    {
        
        if(j<=i) {
            str += '*';
        }
        else {
            str += ' ';
        }
        
    }
    console.log(str);
}