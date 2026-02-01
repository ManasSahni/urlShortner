const express = require('express');
const { connectToMongoDB } = require('./connect')
const app = express();
const PORT = 8001;
const urlRouter = require("./routes/url");

app.use('/user', urlRouter);

connectToMongoDB().then(() => {
    app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
});