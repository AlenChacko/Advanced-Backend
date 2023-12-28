// reading values from terminal
const readLine = require('readline')
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Enter your name : ",(name)=>{
    console.log(`Your name is ${name}`)
    rl.close()
})
