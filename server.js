const { readFile } = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    readFile('./home.html','utf8',(err, html)=>{
        if (err) {
            res.status(500).send("Sorry, out of order.")
        }

        res.send(html)
    })
});
app.listen(port,() => {
    console.log('Hi Manh, server is running...');
});
