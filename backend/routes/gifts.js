const router = require('express').Router();
let gifts = require('../models/gift.models');


router.route('/').get((req, res) => {
gifts.find()
     .then(gifts => res.json(gifts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

const friendname = req.body.friendname;
const description = req.body.description;
const budget = req.body.budget;
const dateBought = Date.parse(req.body.dateBought);

const newGift = new gifts({

     friendname,
     description,
     budget,
     dateBought,

 });

 newGift.save()
     .then(() => res.json('Gift added!'))
     .catch(err => res.status(400).json('Error: ' + err));
 });

 router.route('/:id').get((req, res) => {
     gifts.findById(req.params.id)
     .then(gift => res.json(gift))
     .catch(err => res.status(400).json('Error: ' + err));
 });

    router.route('/:id').delete((req, res) => {
     gifts.findByIdAndDelete
     .then(() => res.json('Gift deleted.'))
     .catch(err => res.status(400).json('Error: ' + err));
 });
     router.route('/update/:id').post((req, res) => {
    gifts.findById(req.params.id)
    .then(Gift => {
        Gift.friendname = req.body.description;
        Gift.description = req.body.description;
        Gift.budget = req.body.budget;
        Gift.dateBought = Date.parse(req.body.dateBought);

         Gift.save()
             .then(() => res.json('Gift updated!'))
             .catch(err => res.status(400).json('Error: ' + err));
      })
     .catch(err => res.status(400).json('Error: ' + err));
 });

 module.exports = router;