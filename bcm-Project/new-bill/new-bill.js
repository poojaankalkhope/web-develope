const tbody = document.querySelector(' #billTable tbody');

// dateUpdate
const date = new Date();
document.getElementById('dateUpdate').innerHTML = date.toDateString();


const date1 = new Date();
document.getElementById('dateUpdate1').innerHTML = date.toLocaleString();


function checkMobileNumber() {
    var mobileNumber = document.getElementById("mobileNumber").value;

    if (isValidateMobileNo(mobileNumber)) {
        document.getElementById("dataTable").style.display = "";
    } else {
        document.getElementById("dataTable").style.display = "none";
    }
}

function isValidateMobileNo(mobileNumber) {

    const mobileRegex = /^(0|[+91]{3})?[7-9][0-9]{9}$/;
    const value = mobileNumber.value;

    return mobileRegex.test(value);
}


const cuBills = [
    { id: 1, item: 'abc', price: 100, quantity: 2, total: 0 },
    { id: 2, item: 'par', price: 10, quantity: 10, total: 0 },
    { id: 3, item: 'vbt', price: 2, quantity: 20, total: 0 }
]


function populateTable() {
    cuBills.forEach(cuBill => {
        const row = document.createElement('tr');

        const { id, item, price, quantity, total, action } = cuBill

        row.innerHTML = `<tr>
        <td>${id}</td>
        <td> ${item} </td>
        <td> <input  type="text" value="" ${price} class="input-1" id="PRICE"> </td> 
         <td> <input  type="text" value="" ${quantity}  class="input-1" id="QTY" onKeyUp="calculationTotal(this)" > </td>
         <td> <input  type="text" value="" ${total} class="input-1" id="TOTAL" readonly> </td>
         <td> 
            <button onclick="deleteRowById(${id})"> Delete </button> 
          </td> 
          </tr>`


        row.id = id
        tbody.appendChild(row)
    })

}
function clearTable() {
    tbody.remove

}
populateTable()

// calculation
function calculationTotal(cntrl) {

    console.log(cntrl.parentElement.parentElement.querySelector('#TOTAL'));

    price = cntrl.parentElement.parentElement.querySelector('#PRICE');
    if (price) {
        price = price.value;
        if (!price) {
            price = 0;
        }
    } else {
        price = 0;
    }

    quantity = cntrl;
    if (quantity) {
        quantity = quantity.value;
        if (!quantity) {
            quantity = 0;
        }
    } else {
        quantity = 0;
    }

    total = Number(price) * Number(quantity);

    cntrl.parentElement.parentElement.querySelector('#TOTAL').value = total;

    calculationGrandTotal();

}

// grandTotalCalculation
function calculationGrandTotal() {
    var totalList = document.querySelectorAll('#TOTAL');
    var totalPrice = 0;

    for(i=0; i< totalList.length; i++){
        total = totalList[i].value;
        if (!total) {
            total = 0;
        }
        totalPrice += Number(total);
    }
     
    document.getElementById('TOTALPRICE').value = totalPrice;

    gst = (totalPrice * 18) / 100;
    document.getElementById('GST').value = gst;

    grandTotal = totalPrice + gst;
    document.getElementById('GRANDTOTAL').value = grandTotal;
}


// delete row
function deleteRowById(id) {
    console.log(`Id ${id}`)
    const index = cuBills.findIndex(cuBill => cuBill.id === id);
    if (index !== -1) {
        cuBills.splice(index, 1); // Remove the customer from the array
        const row = document.getElementById(`${id}`);
        if (row) {
            row.remove(); // Remove the corresponding row from the table
        }
    }
}

function billPage() {
    window.location.href = '../bill/bill.html'

}

