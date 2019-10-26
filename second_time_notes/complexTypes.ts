let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};

let complexObject: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 1010, 10011],

    output: function (all: boolean): number[] {
        return this.data;
    }
}

type Complex = {data: number[], output: (all: boolean) => number[]};
let newComplexObj: Complex = {
    data: [1], 
    output: function (all: boolean):  number[]{
        return this.data;
    }
}

let nullableNumber: number | null;
canBeNull = 11;
canBeNull = null;

// delegate declaraion or 'function types'
let myFunc: (value1: number, value2: number) => void;
myFunc = addNumbers;
