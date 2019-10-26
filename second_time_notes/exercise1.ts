type BankAcct = {money: number, deposit: (value: number) => void};
type Person = {name: string, bankAccount: BankAcct, hobbies: string[]};

let bankAcct: BankAcct = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};

let me: Person = {
    name: "Max",
    bankAccount: bankAcct,
    hobbies: ["Sports", "Cooking"]
};

me.bankAccount.deposit(100);
console.log(me);