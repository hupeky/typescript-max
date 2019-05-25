let string = 'max'

// tuples fixed array format, number and order of types

let addres:[string, number] = ["Superstreet", 99]

// enum transforms numbers into more meaningful 

enum Color {
    red, // default 0
    green = 4,  // default 1 but has been initialised with user value
    blue = 10 // default 2
}

let myColor: Color = Color.green

// function shape declaration

let multiply: (arrVal: number[], value2: number) => number

function multiplyFunc([value, ...rest]: number[], value2: number):number {
    console.log('add', value + value2, 'rest', rest)
    return value + value2
}

interface complexObj {data: number[], output: (all: boolean) => number[]}
type complexType = {data: number[], output: (all: boolean) => number[]}

let complex: complexType = { 
    data: [100, 3.99, 10],
    output: (all: boolean): number[] => {
        return [100, 3.99, 10]
    }
}

console.log (typeof complex)

// never 
function neverReturns(): never { // function never finishes execution
    throw new Error('an error')
}

// Nullable Types
let canBeNull: number = 10
canBeNull = null 
console.log('can be null', canBeNull)
let canAlsoBeNull = null
