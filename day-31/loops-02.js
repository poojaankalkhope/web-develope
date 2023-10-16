function forModification() {
    console.log(`Modified For Loop`)
    let i=0;
    for( ; i<10 ; i++) {
        console.log(`Hi`)
    }
}
forModification() 

finction infiniteLoop() {
    console.log(` Infinite Loop`)
    while(true) {
        console.log(`Hi`)
    }
}

function infiniteLoopwithCondition() {
    console.log(`Infinite Loop`)

    let IsSec = false

    while(true) {
        console.log(`hi`)

        // if(isSec == true) break
        if(isSec) break
        else continue
        }
}