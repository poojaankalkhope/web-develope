const arr = [
    'andriod',
    'apple',
    'google',
    'ibm',
    'nvidia',
    'abc',
    'pqr',
 ]

const addUlItems = () => {
    const ul = document.getElementById('ulComp')

    arr.forEach(company => {
        const li = document.getElementById('li')
        li.textContent = company
        ul.append(li)
    })
}
addUlItems()