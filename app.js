const express = require("express");
const fs = require("fs");
var app = express();


app.use("*", function (req, res, next) {
    res.set({
        "Access-Control-Allow-Origin": "*"
    });
    next();
});

app.use("/", (req, res) => {
    fs.readFile('1.txt' ,(err, data) => {
        if (err) throw err;
        let member = [];
        data.toString().trim().replace(/\r/g, "").split("\n").forEach(item => {
            member.push({
                "name" : item
            })
        })
        res.json(member);
    });
})

app.listen(3000);
