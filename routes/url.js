const express = require('express');
const { handleGenerateShortUrl, handleGetAnalytics } = require('../controllers/url');

const urlRouter = express.Router();

urlRouter.post('/', handleGenerateShortUrl);
urlRouter.get('/analytics/:shortId', handleGetAnalytics);

module.exports = urlRouter;