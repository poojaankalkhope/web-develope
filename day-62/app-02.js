let isBig = false;

function btnClicked () {
    console.log('btn clicked')
    const dv = document.getElementById('dv')
    const red = Math.random() * 256
    const green = Math.random() * 256
    const blue = Math.random() * 256
    dv.style.backgroundColor =`rgb(${red}, ${green} , ${blue})`

    isBig = !isBig
    const pr = document.getElementById('pr')
    if(isBig) {
        pr.className = 'big'
    }
    else{ pr.classlist.remove('big')}
}
 

const btnRmPara = () => {
    const pr = document.getElementById('pr')

    const mn = document.getElementById('mn')
    mn.removeChild(mn.childNodes.items([3]))
}
 