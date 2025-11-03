const fs = require("fs");

 fs.writeFileSync("./text.txt", "hello bhai Sync ho gya add ");

// fs.writeFile("./text.txt", "\n \n hmm ab ASync hai" ,(err,result)=>{
//     if(err){
//         return {};
//     }
//     else{
//         console.log("file is written");
//     }
// }
// )

const result = fs.readFileSync("./text.txt", "utf-8");
fs.readFile("./text.txt","utf-8",(err,result)=>{
    if(err){
        console.err("error h bhai");
    }
    else{
        console.log(result);
    }
})
fs.appendFileSync("./text.txt","\n \n append ho gyaa h check kar")
console.log(fs.statSync("./text.txt"));