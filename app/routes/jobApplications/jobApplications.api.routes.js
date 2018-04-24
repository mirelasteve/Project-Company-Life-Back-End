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
    .post('/jobapplications/:id', async (req, res) => {
        const jobId = req.params.id;
        const newJobApplication = req.body;
        newJobApplication.jobId = jobId;
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
