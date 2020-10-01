const { response } = require('express');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    readFile('./home.html','utf8',(err, html)=>{
        if (err) {
            response.status(500).send("Sorry, out of order.")
        }

        response.send(html)
    })
});
app.listen(port,() => {
    console.log('Hi Manh, server is running...');
});
