/* ************ Class ************ */
type CarType = {
    price: number;
    color: String;
}

class Car {
    price: number = 0;
    color: String = "not defined"
    constructor(price: number, color: string) {
        this.price = price
        this.color = color
    }
}
let car1: CarType = new Car(300, "Red")
car1.color = "Green";
car1.price = 350
let car2: CarType = new Car(400, "Black")
let car3: CarType = new Car(500, "Blue")

console.log(car1);
console.log(car2);
console.log(car3);