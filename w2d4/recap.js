// Callbacks
// Synchronous / Asynchronous

const logToConsole = (greeting, value) => console.log(greeting, value)

const someHOF = (callback) => {
  console.log("Yo yo yo")
  callback("Little chicken")
}

someHOF((name) => logToConsole("Hi", name))

// Promises
// Avoid callback hell
// Asynchronous
// Resolved => .then()
// Rejected => .catch()


boilWater()
  .then(message => {
    console.log(message)
    pourWater()
  })
  .catch(err => console.log(err))


boilWater()
  .then(console.log)
  // .then(() => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout()
  //   })
  // })
  .then(pourWater)
  .catch(console.log)