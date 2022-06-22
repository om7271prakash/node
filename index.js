const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: "Aman Kumar"
    },
    {
        id: 1,
        name: "Rakesh Sharma"
    }
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

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

app.get('/friends', (req, res) => {
    res.send(friends);
});

app.get('/friends/:friendId', (req, res) => {
    const friendId = req.params.friendId;
    const friend = friends[friendId];
    console.log(friend)
    if(friend){
        res.status(200).json(friend);   
    }else{
        res.status(404).json({
            error: "Friend does not exist."
        });
    }
});

app.listen(PORT, () => {
    console.log(`App is running ${PORT}`);
});