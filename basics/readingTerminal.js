// reading values from terminal

// importing module
const readLine = require('readline')
const rl = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
})

// creating readline interface
rl.question("Enter your name : ",(name)=>{
    console.log(`Your name is ${name}`)
    rl.close()
})

// listening to the close event
rl.on('close',()=>{
    console.log('Interface closed')
    process.exit(0)
})
