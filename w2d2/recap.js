// Functions

// Function expression (this defined at definition)
const someFunction = function () {
  // Insert stuff here...
}

// Function expression (arrow) (this defined at execution)
const someArrowFunction = () => {
  // Insert stuff here...
}

// Function definition (hoisting)
function someFunctionAgain() {
  // Insert stuff here...
  console.log("Hello!")
}
// someFunctionAgain()

const doubleUp = (number) => number * 2

// Callbacks => Relationship status
// Higher Order Function => Drill, drill bits (Function that needs another function as a parameter)

const homemadeForEach = (list, action) => {
  for (const element of list) {
    action(element)
  }
}

homemadeForEach([1, 2, 3], element => console.log(element))