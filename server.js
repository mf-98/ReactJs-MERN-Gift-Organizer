const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://user1:1111@cluster0-tyngd.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection succesful");
})

const giftRouter = require('.routes/friends')
const friendRouter= require('.routes/gift')

app.use('/gift',giftRouter);
app.use('/friends',friendRouter);


app.listen(port, () => {
    console.log(`Server is runing on port: 5000`);
});