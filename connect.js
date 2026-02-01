const mongoose = require('mongoose');
require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

async function connectToMongoDB() {
    mongoose.connect("mongodb+srv://manassahni0809_db_user:MfjDjTu3wB0XdE7e@ms-cluster.isjon1c.mongodb.net/urlShortner")
    .then(() => console.log("MongoDB connected!!"))
    .catch(err => console.log("Error in connecting MongoDB: ", err))
}

module.exports = { connectToMongoDB };