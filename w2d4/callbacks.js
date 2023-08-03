// Coffee !

// grindCoffee
// boilWater
// pourWater
// enjoyCoffee

// Errors?

const grindCoffee = (successAction, failAction) => {
  const pebbleInCoffee = Math.random() > 0.5

  console.log("** Putting the beans in the grinder! **")
  try {
    console.log("** Grinding the beans **")

    if (pebbleInCoffee) {
      throw new Error("OH NO PEBBLE IN MY GROUNDS, MY GRINDER IS FINISHED :( ")
    }
    console.log("** LOOK AT THIS GROUND COFFEE ITS PERFECT **")
    successAction()
  } catch (err) {
    console.log(err)
    failAction()
  }
}

grindCoffee(
  () => console.log("On to the next step"),
  () => console.log("Whatever, let's go to Tims")
)


const grindCoffee2 = (nextStepAction) => {
  const pebbleInCoffee = Math.random() > 0.5

  console.log("** Putting the beans in the grinder! **")
  try {
    console.log("** Grinding the beans **")

    if (pebbleInCoffee) {
      throw new Error("OH NO PEBBLE IN MY GROUNDS, MY GRINDER IS FINISHED :( ")
    }
    console.log("** LOOK AT THIS GROUND COFFEE ITS PERFECT **")
    nextStepAction({ err: null })
  } catch (err) {
    console.log(err)
    nextStepAction({ err: err })
  }
}

grindCoffee2((params) => {
  if (params.err) {
    console.log("Whatever, let's go to Tims")
  } else {
    console.log("On to the next step")
  }
})


















const boilWater = () => {
  const kettleExploded = Math.random() > 0.5

  console.log("*** Boiling the water ***")
  try {
    if (kettleExploded) {
      throw new Error("*** OMG THERES HOT WATER EVERYWHERE ***")
    }
    console.log("*** WATER BOILING DANCE ***")
  } catch (err) {
    console.log(err)
  }
  console.log("*** Boiling process finished ***")
}

// grindCoffee(boilWater)