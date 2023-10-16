function breakContinueEx() {

    for(let i=0; i<5; i++) {
        if(i===3) {
            console.log(`Reached 3, so breaking the loop`)
            break
        }
        console.log(`step ${i}`)
    }

    for(let i=0; i<5; i++) {
        if(i===2) {
            console.log(`reached 2, so skipping`);
            continue
        }
        console.log(`step ${i}`);
    }
}

breakContinueEx()