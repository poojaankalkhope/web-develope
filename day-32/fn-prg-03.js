function print() {
    console.log(`hi`)
}

setTimeout(print, 3000) //3s

setTimeout(function(){
    console.log(`hi`)
}, 4000) //4s

setTimeout (() => console.log(`hi`), 5000)