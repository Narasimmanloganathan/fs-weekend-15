class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Amount(amount) {
        console.log("amount deposited successfully!", amount)
    }
    withdrawl() {
        console.log("Server Busy")
    }
    get_St() {
        console.log("Display St")
    }
    get_Bal() {
        console.log("Balance is Null")
    }
}
let a1 = new Account()
console.log(a1)
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount(50000)
a1.withdrawl()
a1.get_St()
a1.get_Bal()