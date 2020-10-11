const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

console.log(express.static(path.join(__dirname, 'public')));

// app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/static', function (req, res, next) {
    res.json([
        {
            "name": 'devesh',
            "age": '10'
        }
    ]);
});

app.listen(3001, function () {
    console.log('running on port 3000');
});