const friends = require('../models/friends.model');

function getFriends(req, res) {
    res.status(200).send(friends);
}

function getFriend(req, res) {
    const friendId = req.params.friendId;
    const friend = friends[friendId];
    if(friend){
        return res.status(200).json(friend);   
    }else{
        return res.status(404).json({
            error: 'Friend does not exist.'
        });
    }
}

function postFriends(req, res) {
    // Status code set only if you return the response
    if(req.body.name){
        const newFriend = {
            id: friends.length,
            name: req.body.name
        }
        friends.push(newFriend);
        return res.status(200).json(newFriend);
    }else{
        return res.status(400).json({
            error: 'Missing property Name.'
        })
    }
}

module.exports = {
    getFriends,
    getFriend,
    postFriends
}