const express = require('express');
const { handleGenerateShortUrl } = require('../controllers/url');

const urlRouter = express.Router();

urlRouter.post('/', handleGenerateShortUrl);

module.exports = urlRouter;