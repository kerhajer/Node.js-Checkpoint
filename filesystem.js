const fs = require('fs')

     fs.writeFile('./welcome.txt','Hello Node' ,(err,data)=>{
        console.log('created succ');
    }) 
  
    const myConsole = new console.Console(fs.createWriteStream('./hello.txt'));
    myConsole.log('hello ');
   fs.readFile('./hello.txt','utf-8' ,(err,data)=>{

   console.log('reading');
    
})
