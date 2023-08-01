const fs = require("fs")



const writeToFile = (data) => {
  fs.writeFile("./potato2.txt", `${data} \n ${data}`, (err) => {
    if (err) {
      console.log("OH NO.")
    } else {
      console.log("File written succesfully")
    }
  })
}

const actionWhenFinishedReading = (err, data) => {
  console.log("err", err)
  console.log("data", data)

  writeToFile(data)
}

fs.readFile("./potato.txt", "utf-8", actionWhenFinishedReading)


// console.log("The contents of the file are: ", data)

// Order of operation is about nesting, not top to bottom
// Readfile
  // actionWhenFinishedReading
    // console
    // console
    // writeToFile
      // fs.writeFile
        // console