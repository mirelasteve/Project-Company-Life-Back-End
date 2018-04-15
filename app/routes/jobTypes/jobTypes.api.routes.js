const {
    Router,
} = require('express');

const JobTypesController = require('./jobTypes.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobTypesController(data);
    app.use('/api', router);

    router
    .get('/jobtypes', async (req, res) => {
        const jobTypes = await controller.getAllJobTypes();
        res.send(jobTypes);
    });
};

module.exports = {
    init,
};
