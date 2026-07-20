//Variable Scope
function scopeExample() {
    var x = "I am function-scoped (var)";
    let y = "I am block-scoped (let)";
    const z = "I am block-scoped and immutable (const)";
    
    console.log(x, y, z);
}

//Array Manipulation
// Second element
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
const getSecond = (arr) => arr[1];
console.log(getSecond(fruits));

// Push and Pop
function modifyArray(arr) {
    arr.push("NewItem");
    arr.pop();
    return arr;
}
    const modifiedFruits = modifyArray(fruits);
    console.log(modifiedFruits);

//Array Methods (Map, Filter, Reduce)
// Square numbers
const nums = [1, 2, 3, 4];
const squared = nums.map(n => n * n);
console.log(squared);

// Filter odds
const getOdds = (arr) => arr.filter(n => n % 2 !== 0);
const oddNumbers = getOdds(nums);
console.log(oddNumbers);


// Reduce sum
const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
const totalSum = sumArray(nums);
console.log(`Odd Numbers: ${oddNumbers}, Total Sum: ${totalSum}`);


//Object Operations
const person = { name: "John", age: 25, occupation: "Developer" };
const getPersonInfo = (obj) => `Name: ${obj.name}, Age: ${obj.age}, Occupation: ${obj.occupation}`;
console.log(getPersonInfo(person));

// Greeting
function greet(p) {
    console.log(`Hello, I am ${p.name}, a ${p.age}-year-old ${p.occupation}.`);
    console.log(getPersonInfo(p));
}

// Rectangle Area
const getArea = (rect) => rect.width * rect.height;
const rectangle = { width: 10, height: 5 };
const area = getArea(rectangle);
console.log(`Area of rectangle: ${area}`);

// Get keys
const getKeys = (obj) => Object.keys(obj);
const keys = getKeys(person);
console.log(keys);

// Merge objects
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const mergedPerson = mergeObjects(person, { city: "New York" });
console.log(mergedPerson);