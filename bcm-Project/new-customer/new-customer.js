document.getElementById('datebirth').max = new Date().toISOString().split("T")[0];

function validateName(cntr) {
    const textRegex = /^[a-zA-Z]+$/g;
    const value = cntr.value;

    if(!textRegex.test(value)) {
        cntr.parentNode.querySelectorAll('.error')[0].innerText = 'Please only use alphabets for name';
    } else {
        cntr.parentNode.querySelectorAll('.error')[0].innerText = '';
    }
}


function isValidateEmail(email) {


    const emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;    
     const value = email.value

     if(!emailRegex.test(value)) {
        email.parentNode.querySelectorAll('.error')[0].innerText = 'Please enter valid email address';
    } else {
        email.parentNode.querySelectorAll('.error')[0].innerText = '';
    }
  
}



