// Promises!

// Commitment to do something
// Maybe fulfilled, maybe not!

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve("Good Job")
//   } else {
//     reject("Bad job")
//   }
// })


// promise
//   .then(success => console.log(success))
//   .catch(err => console.log(err))
//   .finally(() => console.log("Promise is done"))




const grindCoffee = () => {
  const pebbleInCoffee = Math.random() > 0.5

  console.log("** Putting the beans in the grinder! **")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("** Grinding the beans **")

        if (pebbleInCoffee) {
          throw new Error("OH NO PEBBLE IN MY GROUNDS, MY GRINDER IS FINISHED :( ")
        }
        resolve("** LOOK AT THIS GROUND COFFEE ITS PERFECT **")
      } catch (err) {
        reject(err)
      }
    }, 2000)
  })
}

const boilWater = () => {
  const kettleExploded = Math.random() > 0.5

  return new Promise((resolve, reject) => {
    console.log("*** Boiling the water ***")
    setTimeout(() => {
      try {
        if (kettleExploded) {
          throw new Error("*** OMG THERES HOT WATER EVERYWHERE ***")
        }
        resolve("*** WATER BOILING DANCE ***")
      } catch (err) {
        reject(err)
      }
      console.log("*** Boiling process finished ***")

    }, 2000)
  })
}

const pourWater = () => {
  const kettleExploded = Math.random() > 0.5

  return new Promise((resolve, reject) => {
    console.log("*** Pouring the water ***")
    setTimeout(() => {
      try {
        if (kettleExploded) {
          throw new Error("*** OMG THERES HOT WATER EVERYWHERE ***")
        }
        resolve("*** LOOK AT THIS BEAUTIFUL FLAT COFFEE BED OMG ***")
      } catch (err) {
        reject(err)
      }
      console.log("*** Pouring process finished ***")

    }, 2000)
  })
}

// const waitForIt = (seconds)


// grindCoffee()
//   .then(message => console.log(message))
//   // .catch(err => console.log(err))
//   .then(boilWater)
//   .then(message => console.log(message))
// .catch(err => console.log(err))
//   .then(pourWater)
//   .then(message => console.log(message))
//   .catch(err => console.log(err))
//   .finally(() => console.log("Coffee making process is done, or maybe not..."))


const listOfPromises = [grindCoffee(), boilWater()]

Promise.all(listOfPromises)
  .then(pourWater)
  .then(message => console.log(message))
  .catch(err => console.log(err))


// const then = (callback) => callback()

// request(url, (err, data) => {

// })

// requestPromise(url)
//   .then(data => ...)
//   .catch(err => console.log(err))