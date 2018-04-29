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
    })
    .post('/jobads', async (req, res) => {
        const newJobAd = req.body;
        await controller.create(newJobAd);
        res.status(201);
    })
    .put('/jobads', async (req, res) => {
        const editedJobAd = req.body;
        const id = editedJobAd.id;
        await controller.update(editedJobAd, id);
        res.status(201).send({
            message: 'Successful update!',
        });
    })
    .delete('/jobads', async (req, res) => {
        const editedJobAd = req.body;
        const id = editedJobAd.id;
        await controller.delete(id);
        res.status(201);
    });
};

module.exports = {
    init,
};
