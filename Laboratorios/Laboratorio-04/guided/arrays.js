const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

console.log(array2); // [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

const fruits = ["apple", "banana", "cherry"];
const hasBanana = fruits.includes("banana");

console.log(hasBanana); // true

const numbers2 = [2, 4, 6, 8];
const allEven = numbers.every((num) => num % 2 === 0);

console.log(allEven); // true

const numbers3 = [1, 3, 5, 7];
const hasEven = numbers.some((num) => num % 2 === 0);

console.log(hasEven); // false

const colors = ["red", "green", "blue"];
colors.forEach((color) => {
  console.log(color);
});

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const user = users.find((user) => user.id === 2);

console.log(user); // { id: 2, name: 'Bob' }

const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

const numbers5 = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Result: 15

const fruit = ["apple", "banana", "cherry", "date", "fig"];

const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // Result: ['banana', 'cherry', 'date']

const fruis = ["cherry", "banana", "apple", "date", "fig"];

fruits.sort();

console.log(fruits); // Result: ['apple', 'banana', 'cherry', 'date', 'fig']

const person = { firstName: "Alice", lastName: "Smith" };

const { firstName, lastName } = person;

console.log(firstName); // Result: 'Alice'
console.log(lastName); // Result: 'Smith'

const numbers6 = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // Result: 1
console.log(second); // Result: 2
console.log(rest); // Result: [3, 4, 5]
