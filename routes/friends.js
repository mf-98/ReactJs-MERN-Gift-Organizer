const router = require('express').Router();
let Friend = require('../models/friend.mode1');


router.route('/').get((req, res) => {
Friend.find()
    .then(friend => res.json(friend))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const name = req.body.name;
const newFriend = new Friend({name: name});

newFriend.save()
    .then(() => res.json('Friend added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
