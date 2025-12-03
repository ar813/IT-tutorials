/* ************ Object in array with type ************ */
type CarTypes = {
    name: string;
    year: number;
}

let car: CarTypes[] = [
    {
        name: 'BMW',
        year: 2018
    },
    {
        name: 'Audi',
        year: 2019
    }
]

console.log(car[1].name); // Audi
console.log(car[1]["name"]); // Audi
