const mongoose = require('mongoose')
const mongoUri = "mongodb+srv://NevyanPlamenov96:MorqkaNa5Koleleta@cluster0.kdztefc.mongodb.net/CV?retryWrites=true&w=majority"

module.exports = () => mongoose.connect(mongoUri)