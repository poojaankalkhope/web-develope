const lgnFrm = document.getElementById('lgnFrm')

export function handleLogin(e) {
    e.preventDefault()

    console.log(e)

    const email = lgnFrm.elements['email'].value
    const password = lgnFrm.elements['password'].value

    console.log(`Email ${email}, Password ${password}`)

    if(email == 'abc' && password == 'pqr'){
        console.log('hi')
        window.location = '../dashboard/dashboard.html'

    }
}

