// Backend code (server.js)
const express = require('express');
const app = express();

app.get('/run-function', (req, res) => {
    // Call your function here
    res.send('Function executed successfully!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
