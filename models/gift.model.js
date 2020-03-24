const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const giftSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
        
    },
    shoppingduration: {
        type: Number,
        required: true
        
    },
    date: {
        type: Date,
        required: true
        
    }
}, {
    timestamps = true
});

const Gift = mongoose.model('Gift',giftSchema);

module.exports = Gift;