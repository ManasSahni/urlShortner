const express = require('express');
const { connectToMongoDB } = require('./connect')
const app = express();
const PORT = 8001;
const urlRouter = require("./routes/url");
const shortIdRouter = require("./routes/shortId");

app.use(express.json());

app.use('/url', urlRouter);

app.use('/:shortId', shortIdRouter);

connectToMongoDB().then(() => {
    app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
});