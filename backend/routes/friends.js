const router = require('express').Router();
let Friend = require('../models/friend.models');


router.route('/').get((req, res) => {
Friend.find()
    .then(friends => res.json(friends))
     .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/add').post((req, res) => {
 const friendname = req.body.friendname;
 const newFriend = new Friend({friendname});

newFriend.save()
     .then(() => res.json('Friend added!'))
     .catch(err => res.status(400).json('Error: ' + err));
 });

module.exports = router;