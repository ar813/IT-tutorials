"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import and Export
const app_js_1 = __importDefault(require("./app.js"));
const app_js_2 = require("./app.js");
console.log((0, app_js_1.default)(4, 5));
console.log(app_js_2.a + app_js_2.b);
let car = [{
        name: 'BMW',
        year: 2018
    },
    {
        name: 'Audi',
        year: 2019
    }
];
console.log(car[1].name);
// 2. Array in loops
let arr = ["Car", "laptop", "Bike", "Table"];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
}
