const express = require('express');
const { handleShortIdParsing } = require('../controllers/shortId');

const shortIdRouter = express.Router({ mergeParams: true });

shortIdRouter.get('/', handleShortIdParsing);

module.exports = shortIdRouter;