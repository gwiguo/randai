const fs = require("fs");
const readline = require("readline");
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