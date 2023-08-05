const mongoose = require('mongoose');
require('dotenv').config()
const mongodbCred = JSON.parse(process.env.MONGOCRED);

module.exports = () => {
    const connString = `mongodb+srv://${mongodbCred.username}:${mongodbCred.password}@${mongodbCred.host}/${mongodbCred.db}?retryWrites=true&w=majority`
    mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('connected', function () {
        console.log('connected to mongodb')
    });
    mongoose.connection.on('error', (err) => {
        console.log('Error:', err)
    });
}