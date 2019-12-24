const express = require("express");
const fs = require("fs");
const readline = require("readline");
const iconv = require('iconv-lite');

fs.writeFileSync('./result.txt','');

const rl = readline.createInterface({ 
  input: fs.createReadStream('./1.txt')
});

let arr = [];
rl.on('line',line => {
    arr.push(line);
})

rl.on('close',()=>{    
    const data = [];
    arr.forEach(item => {
        data.push({
            'name' : item
        })
    })
    fs.appendFileSync('./result.txt', JSON.stringify(data));
})
// var app = express();


// app.use("*", function (req, res, next) {
//     res.set({
//         "Access-Control-Allow-Origin": "*"
//     });
//     next();
// });

// app.use("/", (req, res) => {
//     fs.readFile('1.txt' ,(err, data) => {
//         if (err) throw err;
//         let member = [];
//         data.toString().trim().replace(/\r/g, "").split("\n").forEach(item => {
//             member.push({
//                 "name" : item
//             })
//         })
//         res.json(member);
//     });
// })

// app.listen(3000);
