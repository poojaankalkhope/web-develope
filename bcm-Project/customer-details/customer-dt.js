const tbody = document.querySelector('#customerTable tbody');
console.log(tbody)

// dateUpdate
const date= new Date();
document.getElementById('dateUpdate').innerHTML= date.toDateString();


const custNm = document.getElementById("cstNm");

const custEm = document.getElementById("cstEm");

const custMb = document.getElementById("cstMb");

const custDob = document.getElementById("cstDob");

const cust =
    { name: "abc", email: "aa@hj.com", mobile: 9876543211, dob: "2022-01-01" }

custNm.innerHTML = cust.name

custEm.innerHTML = cust.email

custMb.innerHTML = cust.mobile

custDob.innerHTML = cust.dob



const custs = [
    { id: 1, bill: 632562346, dob: '2022-01-03', amount: 1500, method: 'UPI' },
    { id: 2, bill: 76576576, dob: '2022-01-02', amount: 567, method: 'CARD' },
    { id: 3, bill: 6646546, dob: '2022-01-01', amount: 1000, method: 'UPI' }

]

function populateTable() {
    custs.forEach(cst => {
        const row = document.createElement('tr');

        const { id, bill, dob, amount, method } = cst

        row.innerHTML = `
            <td> ${id} </td>
            <td onclick="billPage()" class="bill-no"> ${bill} </td>
            <td> ${dob} </td>
            <td> ${amount} </td>
            <td> ${method} </td>`


        row.id = id
        tbody.appendChild(row)
    })

}

function clearTable() {
    tbody.remove

}
populateTable()


function billPage() {
    window.location.href = '../bill/bill.html'

}

