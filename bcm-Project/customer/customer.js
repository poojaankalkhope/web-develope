const tbody = document.querySelector(' #customerTable tbody');

// dateUpdate
const date= new Date();
document.getElementById('dateUpdate').innerHTML= date.toDateString();

// search number
const searchNm = () => {
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

const custs = [
    { id: 1, mobile: 9876543211, name: 'abc', dob: '2000-01-01', },
    { id: 2, mobile: 8765432112, name: 'pqr', dob: '2002-01-01', },
    { id: 3, mobile: 5432112345, name: 'lmn', dob: '1998-01-01', },
    { id: 4, mobile: 9832112345, name: 'stu', dob: '1995-01-01', }

]

// Edit Button
function editButton() {
    window.location.href = '../new-customer/new-customer.html'

}

// Delete Button
const onDel = (id) => {

    console.log(`Delete Called ${id}`)
}

function beginersWay() {
    let ind = -1
    for (let i = 0; i < custs.length; i++) {
        const cst = custs[i]
        if (cst.id == id) ind = i
    }

    console.log(custs.slice(0, ind))
    console.log(custs.slice(ind + 1, custs.length))

    const deleted = [...custs.slice(0, ind), ...custs.slice(ind + 1, custs.length)]
    custs = deleted
    console.log(deleted)

    populateTable()

}

function deleteRowById(id) {
    console.log(`Id ${id}`)
    const index = custs.findIndex(cst => cst.id === id);
    if (index !== -1) {
        custs.splice(index, 1); // Remove the customer from the array
        const row = document.getElementById(`${id}`);
        if (row) {
            row.remove(); // Remove the corresponding row from the table
        }
    }
}


function populateTable() {
    custs.forEach(cst => {
        const row = document.createElement('tr');

        const { id, mobile, name, dob } = cst

        row.innerHTML = `
    <td> ${id} </td>
    <td> ${mobile} </td>
    <td> ${name} </td>
    <td> ${dob} </td>
    <td> 
     
         <button onclick=editButton()> edit </button> 
         <button onclick="deleteRowById(${id})">  Delete </button> 
     </td>`


        row.id = id
        tbody.appendChild(row)
    })

}

function clearTable() {
    tbody.remove

}
populateTable()

