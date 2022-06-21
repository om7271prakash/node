const express = require('express');

const app = express();

const PORT = 3000;

app.get('', (req, res) => {
    res.send("Hello there! This is simple text");
});

app.get('/json', (req, res) => {
    res.send({
        id: 1,
        name: "Om Prakash Thakur",
        state: "Himachal Pradesh",
        country: "India"
    });
});

app.get('/html', (req, res) => {
    res.send("<ul><li>Om Praksh</li><li>Rakesh Sharma</li><li>Ravinder Kumar</li></ul>");
});

app.listen(PORT, () => {
    console.log(`App is running ${PORT}`);
});