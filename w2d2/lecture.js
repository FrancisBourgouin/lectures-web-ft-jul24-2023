// Asynchronous content!
// Let's complete this document asynchronously

// Doesn't follow a specific order

const bob = "Robert"

console.log(`Hi ${bob}`)

// We create the variable called bob, then assign "robert" to it
// We call the log method with the string `Hi ${bob}`


// JavaScript is asynchronous by nature
// Interactive web pages, listen for events

// console.log("Yo yo yo")

// // Is setTimeout asynchronous?
// setTimeout(() => {
//   console.log("How are you?")
// }, 5000)

// setTimeout(() => {
//   console.log("Pretty good you?")
// }, 5000)

// console.log("Good bye")


const word = "WAZAAAAA"
// For each letter, augment the time by 1s (1000ms)
// For loop (C-style)
// For in ?

1000
2000
3000

console.log("Hey dude! Pick up the phone!")
for (let i = 0; i < word.length; i++) {
  const letter = word[i]

  setTimeout(() => console.log(letter), 500 * (i + 1))
}

// Put 5 liters of water in a pot, put it to max, wait 12.5 minutes BAD
// Put 5 liters of water in a port, put it to max, wait until it's boiling GOOD

// External content JS => Read content from other files (exclude require)
// External content JS => Read/Write content from/to other files (config files, text files, export content)
// External content JS => Wait for the terminal, terminal interactions
// External content JS => Events!
// External content JS => Remote content



// Things to watch for

// Make sure that things are called in the right order
// The right order is not necesarly? top to bottom, but may be nested instead.

// Be careful of scoping

const errorProb = (name) => {
  console.log(name)
}


const dangerFct = () => {
  const name = "bob"

  errorProb(name)
}