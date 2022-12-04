class Account {
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal = 500
    constructor(id, name, amount) {
        this.acc_Id = id;
        this.acc_Name = name;
        this.acc_Bal = amount
    }
    get_Bal() {
        return this.acc_Bal - this.min_Bal
    }
}
let a1 = new Account(101, "Rahul", 10000);
let a2 = new Account(102, "Priyanka", 500000);
console.log(a1)
console.log(a1.get_Bal())

console.log(a2)
console.log(a2.get_Bal())
