const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.all('/', (req, res) => {
    res.send('CIAO');
});

app.listen(PORT, () => {
    console.log('PORT ', PORT);
    console.log('SERVER LISTENING');
});