const express = require('express');
const app = express();

app.all('/', (req, res) => {
    res.send('CIAO');
});

app.listen(80, () => {
    console.log('SERVER LISTENING');
});