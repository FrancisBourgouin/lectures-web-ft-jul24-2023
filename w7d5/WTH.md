# Mystified ?

- Photo Labs Modal
- Calling vs Reference vs Defining
- useState

## Calling vs Reference vs Defining

```jsx
// Function Expression (Arrow)
const someFunction = () => console.log("Hello!");

// Function Expression
const someOtherFunction = function () {
  console.log("Hello!");
};

// Function Definition (Not the best choice, most of the time)
// Dangerous behavior with hoisting
// They can be reassigned
function someOtherOtherFunction() {
  console.log("Hello!");
}

export default function SomeComponent(){

}

const SomeOtherCOmponent = function(){

}
export default SomeOtherComponent



const addTwoNumbers = (a,b) => a + b

const result1 = addTwoNumbers
// What is result1 = Function
// A function, that takes two params (a,b) and returns the sum (same as addTwoNumbers)
// addTwoNumbers === result1 =>



const result2 = addTwoNumbers(2,3)
// What is result2 = 5
// result2 is the number 5
// Give the params, we let the function execute with the called parameters, we store the result that is returned



const result3 = () => addTwoNumbers(2,3)
// What is result3 = Function
// Simplify our code or life, run addTwoNumbers with specific parameters for me
// We need to call result3 for it to work
// Why? : If we want to run the same multiple times
// Why? : If we want to adapt to a callback



const listOfNumbers = [1,2,3,4,5,6]

const addFiveToNumber = number => addTwoNumbers(number, 5)

// addFiveToNumber(10) => 15

// I want to add 5 to all those numbers

listOfNumbers.map(addFiveToNumbers)
listOfNumbers.map(number => addFiveToNumbers(number))
listOfNumbers.map(number => addTwoNumbers(number, 5))

if(Array.isArray(listOfNumbers)){

}
```
