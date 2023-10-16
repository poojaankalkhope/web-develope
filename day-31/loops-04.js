function nestedFor() {
    console.log(`Nested For`)
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            console.log(`i ${i} j ${j}`)
        }
    }
}

function nestedWhile() {
    console.log(`Nested For`)

    let i=5;
    while(i>=0) {
        let j=5  
        while(j >= 0) {
            console.log(`i ${i} j ${j}`)
            --j;
        }
        i--;
    }
}
nestedWhile()