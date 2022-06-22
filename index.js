const express = require('express');

const messagesController = require('./controllers/messages.controller');
const friendsController = require('./controllers/friends.controllers');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/messages', messagesController.getMessage);
app.post('/messages', messagesController.postMessage);

app.get('/friends', friendsController.getFriends);

app.get('/friends/:friendId', friendsController.getFriend);

app.post('/friends', friendsController.postFriends);

app.listen(PORT, () => {
    console.log(`App is running ${PORT}`);
});