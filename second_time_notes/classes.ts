class Human{
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
        this.age = 0;
        this.type = "hi";
    }

    printAge() {
        console.log(this.age);
    }

    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

let person = new Human("Jim", "jimmyboy");
person.username;
person.printAge();

class BillyBoy extends Human {  
    constructor() {
        super("Billyboyo", "bbyo");    // calls constructor of parent class
        this.age = 100;
    }

    printAge(){
        console.log("dat hundo");
    }
}


class Plant {
    private _species: string = "";

    get species(){
        return this._species;
    }
    
    set species(value: string){
        if (value.length > 3){
            this._species = value;
        }
    }

    public static growPlant(species: string): void {
        console.log("Plant planted: " + species);
    }
}

abstract class Abstracto {
    abstract absofacto(endlessSummer: string): void;
}

// 'singletons', useful for persistent data needed throughout an application
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public name: string) {}

    static getInstance(){
        if (!OnlyOne.instance){
            OnlyOne.instance = new OnlyOne("The only one");
        }
        return OnlyOne.instance;
    }
}