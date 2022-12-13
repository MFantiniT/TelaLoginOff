const express = require("express");
const app = express();
const port = 5000;
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/TelaLoguin.html'));
});


app.listen(port, () => {
    console.log('servidor rodando')
})
