/* ************** Tuples ************** */

// In TypeScript, tuples are a data structure that allows you to store a fixed-size collection of elements of different types. They are similar to arrays, but with a key difference: the types of elements in a tuple are fixed and declared at the time of creation, whereas arrays can hold elements of the same type, and their size can vary.

// Real-life example of using tuples in TypeScript:
// Let's consider a scenario where you want to represent a person's basic information, including their name, age, and whether they have a driver's license. Using a tuple can be an appropriate choice because these three elements have a specific order and type.

// Defining a tuple type for person information
type PersonInfo = [string, number, boolean]

// Function to display person information
const displayPersonInfo = (person: PersonInfo) => {
const [name, age, hasDriverLicense] = person;
console.log(`Name: ${name}, Age: ${age}, hasDriverLisence: ${hasDriverLicense ? "Yes": "No"}`);
}
// Example 
const person1: PersonInfo = ['Arsalan', 29, true]
const person2: PersonInfo = ['Khan', 17, false]

displayPersonInfo(person1)
displayPersonInfo(person2)

/* ************** Practise Of Tuples ************** */

// Question 1:
// You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:

// Product name (string)
// Price (number)
// Quantity (number)

// Create two product instances using this tuple type and display their information.

// Define the tuple type called ProductInfo
type ProductInfo = [string, number, number];

// Create two product instances using this tuple type
const product1: ProductInfo = ['Laptop', 1500, 10];
const product2: ProductInfo = ['Smartphone', 800, 25];

// Function to display product information
function displayProductInfo(product: ProductInfo): void {
    const [name, price, quantity] = product;
    console.log(`Product Name: ${name}`);
    console.log(`Price: $${price}`);
    console.log(`Quantity: ${quantity}`);
    console.log('----------------------');
}

// Display the information of the two products
displayProductInfo(product1);
displayProductInfo(product2);

// Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

// Define the tuple type called SubjectGrade
type SubjectGrade = [string, number];

// Create an array of SubjectGrade tuples to store grades for a student
const grades: SubjectGrade[] = [
    ['Math', 85],
    ['English', 78],
    ['Science', 92]
];

// Function to calculate and display the average grade
function calculateAverageGrade(grades: SubjectGrade[]): void {
    let total = 0;
    grades.forEach(([subject, grade]) => {
        total += grade;
    });
    const average = total / grades.length;
    console.log(`Average Grade: ${average.toFixed(2)}`);
}

// Display the average grade for the student
calculateAverageGrade(grades);


// Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

// Define the WeatherData tuple type
type WeatherData = [string, number, string];

// Create the displayWeather function
function displayWeather(weatherArray: WeatherData[]): void {
    weatherArray.forEach((weather) => {
        const [city, temperature, condition] = weather;
        console.log(`City: ${city}`);
        console.log(`Temperature: ${temperature}°C`);
        console.log(`Condition: ${condition}`);
        console.log('---------------------------');
    });
}

// Example usage:
const weatherDataArray: WeatherData[] = [
    ['Karachi', 35, 'Sunny'],
    ['Lahore', 28, 'Cloudy'],
    ['Islamabad', 25, 'Rainy'],
    ['Quetta', 22, 'Windy']
];

displayWeather(weatherDataArray);