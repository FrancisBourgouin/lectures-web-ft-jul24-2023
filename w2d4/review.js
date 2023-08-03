// Coffee!

// Callbacks

// For asynchronous content, callbacks are a necessity
// Callbacks are functions used as a parameter
// Callbacks are a relationship status between two functions, one of them at least is HOF
// We have a function that needs another function to work

const someArray = [1, 2, 3, 4]

const logToConsole = value => console.log(value)

someArray.forEach(logToConsole)


const higherOrderFunctionOne = (callbackFct) => {
  callbackFct(Math.random())
}

const higherOrderFunctionTwo = callbackFct => {
  for (let i = 0; i < 5; i++) {
    callbackFct()
  }
}

// const randomFunction = () => higherOrderFunctionOne(logToConsole)

// higherOrderFunctionTwo(() => higherOrderFunctionOne(logToConsole))


// higherOrderFunctionTwo(() => {
//   higherOrderFunctionOne((value) => {
//     higherOrderFunctionOne((value) => {
//       logToConsole(value)
//     })
//   })
// })


const bob = 5

try {
  setTimeout(() => {
    bob = 6 // Throw an exception / an error
  }, 1000)
} catch (err) {
  console.log("OH NO.")
}

console.log("Hello!")

// Step 1: Define bob as a constant, with the value of 5
// Step 2: Open up a try block
  // Step 3: start a timer that will do a callback eventually
// Step 4: Close the try / Open catch block
  // Step 5: We log the error if necessary
// Close the catch
// Step 6: Console log Hello
// Step 7: Run the callback