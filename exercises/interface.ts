this.firstName = 'gdlobal'

interface NamedPerson { // interface sets the contract of the shape of the data
    firstName: string,
    age?: number // optional property key
    [propName: string]: any, // flexible unknown propery in advance
    greet(lastName: string): void
}

const greet = (person: NamedPerson) => {
    console.log("hello, " + person.firstName)
}

const changedName = (person: NamedPerson) => {
    person.firstName = 'anna'
}

class Person implements NamedPerson {
    constructor() {
        this.greet = this.greet.bind(this)
    }

    firstName = 'max'
    greet (lastName: string)  {
        console.log(this)
        console.log('I am ', this.firstName + ' ' + lastName)
    }
}
const person = new Person()
greet(person)
changedName(person)
greet(person)
person.greet('var')

// function types

interface MyFunc {
    (number1: number, number2: number): number
}

let myFunc: MyFunc 
myFunc = (val1, val2) => {return val1 + val2}

console.log(myFunc(2, 6))