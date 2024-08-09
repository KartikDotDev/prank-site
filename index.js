const express = require('express');

const app = express(); 

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(__dirname + '/payload.sh');
});


console.log(__dirname);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});