const tbody = document.querySelector('#billTable tbody');
console.log(tbody)

// dateUpdate
const date= new Date();
document.getElementById('dateUpdate').innerHTML= date.toDateString();

const cuBills = [
    { id: 1, bill: 11234, mobile: 98706534, amount: 3567, date: "2022-01-01", counter: 1, cashier: 'abc' },
    { id: 2, bill: 11233, mobile: 98606534, amount: 3456, date: "2022-01-01", counter: 12, cashier: 'lmn' },
    { id: 3, bill: 11232, mobile: 98506534, amount: 1269, date: "2022-01-01", counter: 2, cashier: 'rty' },
]
function populateTable() {
    cuBills.forEach(cuBill => {
        const row = document.createElement('tr');

        const { id, bill, mobile, amount, date, counter, cashier } = cuBill

        row.innerHTML =   `<tr>
        <td>${id}</td>
        <td onclick="billDt()" class="bill-no"> ${bill} </td>
        <td> ${mobile} </td> 
         <td> ${amount} </td>
         <td> ${date} </td>
         <td> ${counter} </td>
         <td> ${cashier} </td>
         </tr> `


        row.id = id
        tbody.appendChild(row)
    })

}

function clearTable() {
    tbody.remove

}
populateTable()

function billDt() {
    window.location.href = '../bill-details/bill-dt.html'

}

function newbill() {
    window.location.href = '../new-bill/new-bill.html'

}



// for billnumber

const billNumber= () => {
    const filter = document.getElementById('myInput').value;

    const mytable = document.getElementById('myTable')

    const tr = mytable.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];
        if (td) {
            let textValue = td.textContent.trim("") || td.innerHTML;

            if (textValue.indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//for mobile
const mobileNumber= () => {
    const filter = document.getElementById('myNumber').value;

    const mytable = document.getElementById('myTable')

    const tr = mytable.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[2];
        if (td) {
            let textValue = td.textContent.trim("") || td.innerHTML;

            if (textValue.indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//for Amount
const amount= () => {
    const filter = document.getElementById('myAmount').value;

    const mytable = document.getElementById('myTable')

    const tr = mytable.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[3];
        if (td) {
            let textValue = td.textContent.trim("") || td.innerHTML;

            if (textValue.indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

//for date
const dates= () => {
    const filter = document.getElementById('myDate').value;

    const mytable = document.getElementById('myTable')

    const tr = mytable.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[4];
        if (td) {
            let textValue = td.textContent.trim("") || td.innerHTML;

            if (textValue.indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


//for counter
const counter= () => {
    const filter = document.getElementById('myCounter').value;

    const mytable = document.getElementById('myTable')

    const tr = mytable.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[5];
        if (td) {
            let textValue = td.textContent.trim("") || td.innerHTML;

            if (textValue.indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


//for cashier
const cashier= () => {
    const filter = document.getElementById('myCashier').value;

    const mytable = document.getElementById('myTable')

    const tr = mytable.getElementsByTagName('tr')
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[6];
        if (td) {
            let textValue = td.textContent.trim("") || td.innerHTML;

            if (textValue.indexOf(filter) == 0) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

