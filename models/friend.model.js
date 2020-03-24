const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    friendname: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps = true
});

const Friend = mongoose.model('Friend',friendSchema);

module.exports = Friend;