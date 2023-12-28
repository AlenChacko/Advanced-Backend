const fs = require('fs')


// starting
console.log('starting')

// reading
fs.readFile('./files/input.txt','utf-8',(err,data)=>{
    console.log(data)
})

// finished
console.log('finished')
