const fs = require("fs");

// starting
console.log("starting");

// reading
fs.readFile("./files/input.txt", "utf-8", (err1, data1) => {
  console.log(data1)
  fs.readFile('./files/output.txt','utf-8',(err2,data2)=>{
    console.log(data2)
    fs.writeFile('./files/append.txt',`${data1}\n\n${data2}`,()=>{
        console.log('file written successfully')
    })
  })
});

// finished
console.log("finished");



