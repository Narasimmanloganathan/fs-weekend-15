class Account {
    min_Bal = 500;
    acc_Bal = 0;
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount

    }
    get_Bal() {
        return this.acc_Bal;
    }
}
let a1 = new Account()

a1.deposit_Amount(5000)
a1.deposit_Amount(4000)
a1.deposit_Amount(4000)
a1.deposit_Amount(4000)
console.log("Account-1 Bal : ", a1.get_Bal())

let a2 = new Account();
a2.deposit_Amount(45000)
console.log("Account-2  Bal:", a2.get_Bal())