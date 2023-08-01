const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const delayedAnswer = words => {
  setTimeout(() => {
    console.log(words)
  }, 2000)
}
// Interface

// On the event of a new line (pressing enter), execute the callback

console.log("Write anything, and I will repeat")

rl.on("line", (line) => {
  delayedAnswer(line)
  if (line === "end") {
    rl.close()
  }
})