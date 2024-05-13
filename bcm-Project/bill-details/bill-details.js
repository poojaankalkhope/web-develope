const tbody = document.querySelector(' #newBillTable tbody');

//date update
const date = new Date();
document.getElementById('dateUpdate').innerHTML = date.toDateString(); 

const date1 = new Date();
document.getElementById('dateUpdate1').innerHTML = date.toLocaleString();

const billDt = [
    { id: 1, item: 'abc', price: 100, quantity: 2, total: 0 },
    { id: 2, item: 'par', price: 10, quantity: 10, total: 0 },
    { id: 3, item: 'vbt', price: 2, quantity: 20, total: 0 }
]


function populateTable() {
    billDt.forEach(billDt => {
        const row = document.createElement('tr');

        const { id, item, price, quantity, total, action } = billDt

        row.innerHTML = `<tr>
        <td>${id}</td>
        <td> ${item} </td>
        <td> <input  type="text" value="" ${price} class="input-1" id="PRICE"> </td> 
        <td> <input  type="text" value="" ${quantity}  class="input-1" id="QTY" onKeyUp="calculationTotal(this)" > </td>
        <td> <input  type="text" value="" ${total} class="input-1" id="TOTAL" readonly> </td>
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



function custdt() {
    window.location.href = '../customer-details/customer-dt.html'
}