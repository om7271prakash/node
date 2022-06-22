const express = require('express');
const friendsController = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendId', friendsController.getFriend);
friendsRouter.post('/', friendsController.postFriends);

module.exports = friendsRouter;