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


type StudentType = {
    name: string;
    age: number;
    rollNo: number;
}

class Student  {
    name: string;
    age: number;
    rollNo: number;
    constructor(name: string, age: number, rollNo: number) {
        this.name = name
        this.age = age
        this.rollNo = rollNo
    }
}

let student1: StudentType = new Student("Arsalan", 20, 123)
let student2: StudentType = new Student("Rafay", 23, 292)
