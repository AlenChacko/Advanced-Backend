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

