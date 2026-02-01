const { URL } = require("../models/url");

async function handleShortIdParsing(req, res) {
    try {
        const {shortId = ''} = req.params;
        if(!shortId) return res.status(400).send('Please provide the shortID');
        
        const urlData = await URL.findOneAndUpdate({
            shortId
        }, { $push: {
            visitHistory: { timestamp: Date.now()}
        }});

        res.redirect(urlData?.redirectUrl);
        }
    catch(err) {
        console.log("ERROR: ", err);
    }
}

module.exports = { handleShortIdParsing };