const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Welcome to my web xD');
})
app.listen(port,() => {
    console.log('Hi Manh, server is running ...');
});

