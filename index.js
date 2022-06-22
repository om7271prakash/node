const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');

const app = express();

const PORT = 3000;

app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.json());
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get('/', (req, res) => {
    res.render('index', {
        title: "Nature",
        caption: "Nature is very beautiful",
    })
})

app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);

app.listen(PORT, () => {
    console.log(`App is running ${PORT}`);
});