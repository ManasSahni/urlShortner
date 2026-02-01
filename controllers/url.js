const shortid = require('shortid');
const { URL } = require('../models/url');

async function handleGenerateShortUrl(req, res) {
    console.log('req >>>> ', req, res)
    const body = req.body;
    if(!body.url) {
        return res.status(400).json({ error: 'URL is required!'});
    }
    const shortId = shortid(8);
    await URL.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortId});
};

async function handleGetAnalytics(req, res) {
    try {
        const shortId = req.params.shortId;
        if(!shortId) {
            return res.status(400).send('Please provide shortId');
        }

        const urlData = await URL.findOne({shortId});

        return res.json({ totalClicks: urlData?.visitHistory?.length || 0, analytics: urlData?.visitHistory || [] });
    }
    catch(error) {
        console.log('Error in handleGetAnalytics: ', error)
    }
}

module.exports = {handleGenerateShortUrl, handleGetAnalytics};