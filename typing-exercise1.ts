type TDeposite = (num: number) => void

type IBankAccount = {
    money: number,
    deposit: TDeposite
}

type IMyselft = {
    name: string,
    bankAccount: IBankAccount,
    hobbies: string[]
}

let bankAccount:IBankAccount = {
    money: 2000,
    deposit: (value:number):void => {
        this.money += value;
    }
}


let myself:IMyselft = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

