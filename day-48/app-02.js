class Atm {
    #acno
    #balance

    constructor(acno, balance) {
        if(acno.trim() == ''){
            throw new Error ('Invalid Account Number')
        }

        if(balance < 0) {
            throw new Error('Invalid balance')
        }

        this.#acno = acno
        this.#balance = balance
    }

    deposit(amt){
        if(amt<0){
            throw new Error('Invalid Amount')
        }
    }

    withdraw(amt){
        if(amt < 0){
            throw new Error('Invalid Amount')
        }

        if(amt < this.#balance) {
            throw new Error('Insufficient Amount')
        }
    }
    balance() {

    }
}


const atm = new Atm('1234',0)

try{
    atm.deposit(100)
}catch(error){
    console.log(error)
}finally{
    console.log('No matter what, i will be called')
}
