const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: 'Om Prakash Thakur'
    },
    {
        id: 1,
        name: 'Hiteshi'
    },
    {
        id: 2,
        name: 'Pradeep'
    },
    {
        id: 3,
        name: 'Ajay'
    }
];

server.on('request', (req, res) => {
    const items = req.url.split('/');
    // /fiends/2 => ['', 'friends', '2']

    if(req.method === "POST" && items[1] === 'friends'){
        req.on('data', data => {
            const friend = data.toString();
            console.log("Friends list>>>", friend);
            friends.push(JSON.parse(friend));
        });
        req.pipe(res);
    }else if( req.method === 'GET' && items[1] === 'friends'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        if(items.length === 3){
            const friendIndex = Number(items[2]);
            res.end(JSON.stringify(friends[friendIndex]));
        }else{
            res.end(JSON.stringify(friends));
        }
    }else if( req.method === "GET" && items[1] === 'message'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Om Prakash Thakur</li>');
        res.write('<li>Whats your thoughts on Quantam theory</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
})  

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});