// Reading files in a synchronous method
const fs = require('fs')

// starting
console.log('starting')

// reading
let inpTxt = fs.readFileSync('./files/input.txt','utf-8')
console.log(inpTxt)

// finished
console.log('finished')




// Writing files synchronously

// starting
console.log('starting writing')


// writting
console.log('Writing')
let content = `${inpTxt} This is added additionally`
fs.writeFileSync('./files/output.txt',content)


// finished
console.log('finished writing')
