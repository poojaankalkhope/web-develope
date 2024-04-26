const tbody = document.querySelector('#billTable tbody');
console.log(tbody)

// dateUpdate
const date= new Date();
document.getElementById('dateUpdate').innerHTML= date.toDateString();

const cuBills = [
    { id: 1, bill: 11234, mobile: 98706534, amount: 3567, date: "2022-01-01", counter: 1, cashier: 'abc' },
    { id: 2, bill: 11233, mobile: 98706534, amount: 3456, date: "2022-01-01", counter: 12, cashier: 'lmn' },
    { id: 3, bill: 11232, mobile: 98706534, amount: 1269, date: "2022-01-01", counter: 12, cashier: 'rty' },
]
function populateTable() {
    cuBills.forEach(cuBill => {
        const row = document.createElement('tr');

        const { id, bill, mobile, amount, date, counter, cashier } = cuBill

        row.innerHTML = `
        <div> ${id} </div>
        <div onclick="billDt()" class="bill-no"> ${bill} </div>
        <div> ${mobile} </div> 
         <div> ${amount} </div>
         <div> ${date} </div>
         <div> ${counter} </div>
         <div> ${cashier} </div> `


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


