class Bank {
    min_Bal = 500;
    acc_Bal = 0;
    deposit_Amount(amount) {
        this.acc_Bal = this.acc_Bal + amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let a1 = new Bank();
a1.deposit_Amount(10000)
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
console.log(a1.get_Bal())
