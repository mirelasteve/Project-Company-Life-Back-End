const {
    Router,
} = require('express');

const JobAdsController = require('./jobAds.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobAdsController(data);
    app.use('/api', router);

    router
    .get('/jobads', async (req, res) => {
        const jobAds = await controller.getAllJobAds();
        res.send(jobAds);
    });
};

module.exports = {
    init,
};
