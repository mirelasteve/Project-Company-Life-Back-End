const {
    Router,
} = require('express');

const JobApplicationsController = require('./jobApplications.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobApplicationsController(data);
    app.use('/api', router);

    router
    .get('/jobapplications/:id', async (req, res) => {
        const id = req.params.id;
        const jobApplications = await controller.getAllJobApplications(id);
        res.send(jobApplications);
    })
    .post('/jobapplications', async (req, res) => {
        const newJobApplication = req.body;
        await controller.create(newJobApplication);
        res.status(201).send('Job Application added!');
    })
    .get('/applications/:userId', async (req, res) => {
        const id = req.params.userId;
        const numberOfApplicationsForUser =
        await controller.getNumberOfJobsForUser(+id);
        res.send(numberOfApplicationsForUser);
    });
};

module.exports = {
    init,
};
