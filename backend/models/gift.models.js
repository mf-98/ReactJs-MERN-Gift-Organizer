const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const giftSchema = new Schema({

    friendname: {
        type: String,
        required: true
        
    },
    description: {
        type: String,
        required: true
        
    },

    budget: {
        type: Number,
        required: true
        
    },

    dateBought: {
        type: Date,
        required: true
        
    }
}, {
    timestamps: true,
});

const Gift = mongoose.model('Gift',giftSchema);

module.exports = Gift;