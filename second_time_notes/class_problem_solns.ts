
class Car {
    name: string;
    acceleration = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void {
        console.log("Tooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

let thisCar = new Car("Helen");
thisCar.honk();
thisCar.accelerate(10);
//-----------------------
class Shape {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends Shape {
    width: number = 5;
    length: number = 2;

    constructor() {
        super();
    }

    calcSize(): number {
        return this.width * this.length;
    }
}
//------------------------
class NamedPerson {
    private _firstName: string = "";

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}