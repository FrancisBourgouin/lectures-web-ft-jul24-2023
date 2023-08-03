const metals = [
  {
    name: "1084",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.8,
      manganese: 0.6,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200
  },
  {
    name: "1075",
    type: "Carbon Steel",
    composition: {
      iron: 98,
      carbon: 0.7,
      manganese: 0.4,
      phosphorus: 0.05,
      sulfur: 0.04,
    },
    forging_min_temp: 900,
    forging_max_temp: 1200
  },
  {
    name: "80CrV2",
    type: "Carbon Steel",
    composition: {
      iron: 98.08,
      carbon: 0.75,
      chrome: 0.4,
      molybdenium: 0.1,
      vanadium: 0.15,
      manganese: 0.3,
      phosphorus: 0.025,
      sulfur: 0.025,
    },
    forging_min_temp: 850,
    forging_max_temp: 1100
  },
  {
    name: "S30V",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.015,
      chromium: 0.14,
      molybdenium: 0.2,
      vanadium: 0.4,
    },
    forging_min_temp: 975,
    forging_max_temp: 1200
  },
  {
    name: "420HC",
    type: "Stainless Steel",
    composition: {
      iron: 98,
      carbon: 0.004,
      nickel: 0.5,
      silicon: 0.6,
      chromium: 0.12,
      manganese: 0.01
    },
    forging_min_temp: 1050,
    forging_max_temp: 1200
  }
]

const oneMetal = {
  name: "1084",
  forging_min_temp: 900,
  forging_max_temp: 1200
}

// What would be the average temperature for us to work with ideally? Min/Max

// What do we want out of the code: Average temperature for all the metals (Number)
// What do have to make that output: metals array
// Relevant lines for our code: 12-13, 25,26, 41,42, 54,55, 68,69
// Every property called forging_min_temp or forging_max_temp
// Average => sum of all divided by the amount
// 12+13/2, 25+26/2, 41+42/2, 54+55/2, 68+69/2
// All of the above divided by 5

// Every object containing the keys that we want are in an array

const calculateAverageTemp = metals => {
  let sumBuffer = 0

  // for(let i = 0; i < metals.length; i++){
  //   const metal = metals[i]

  // for(const key in metals){
  //   const metal = metals[key]

  for (const metal of metals) {
    sumBuffer += (metal.forging_min_temp + metal.forging_max_temp) / 2
  }

  const averageMetalTemp = sumBuffer / metals.length

  return averageMetalTemp
}

// ((metals[0].forging_min_temp + metals[0].forging_max_temp) / 2
// +
// (metals[1].forging_min_temp + metals[1].forging_max_temp) / 2
// +
// (metals[2].forging_min_temp + metals[2].forging_max_temp) / 2
// +
// (metals[3].forging_min_temp + metals[3].forging_max_temp) / 2
// +
// (metals[4].forging_min_temp + metals[4].forging_max_temp) / 2)
// / metals.length


// - Steps to take a shower