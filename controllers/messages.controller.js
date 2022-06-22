const path = require('path');

function getMessage(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'nature.jpg'));
    // res.send("<ul><li>Om Praksh</li><li>Rakesh Sharma</li><li>Ravinder Kumar</li></ul>");
}

function postMessage(req, res){
    console.log("updating message....");
}

module.exports = {
    getMessage,
    postMessage
}