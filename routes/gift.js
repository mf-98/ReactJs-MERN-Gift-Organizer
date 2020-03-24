const router = require('express').Router();
let Gift = require('../models/gift.mode1');


router.route('/').get((req, res) => {
Gift.find()
    .then(gifts => res.json(gifts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
const name = req.body.name;
const description = req.body.description;
const shoppingduration = Number(req.body.shoppingduration);
const date = Date.parse(req.body.date);

const newGift = new Gift({
    username: name,
    description,
    duration: shoppingduration,
    date,
});

newGift.save()
    .then(() => res.json('Gift added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route(':/id').get((req, res) => {
    Gift.findById(req.params.id)
    .then(gift => res.json(gift))
    .catch(err => res.status(400).json('Error: ' + err));
});

    router.route('/:id').delete((req, res) => {
    Gift.findByIdAndDelete
    .then(() => res.json('Gift deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
    router.route('/update/:id').post((req, res) => {
    Gift.findById(req.params.id)
    .then(Gift => {
        Gift.name = req.body.name;
        Gift.description = req.body.description;
        Gift.shoppingduration = Number(req.body.shoppingduration);
        Gift.date = Date.parse(req.body.date);

        Gift.save()
            .then(() => res.json('Gift updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
     })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;