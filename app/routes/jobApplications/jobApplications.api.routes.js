const {
    Router,
} = require('express');

const JobApplicationsController = require('./jobApplications.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new JobApplicationsController(data);
    app.use('/api', router);

    router
    .get('/jobapplications', async (req, res) => {
        const jobApplications = await controller.getAll();
        res.send(jobApplications);
    })
    .get('/jobapplications/:id', async (req, res) => {
        const id = req.params.id;
        const jobApplications = await controller.getAllJobApplications(id);
        res.send(jobApplications);
    })
    .post('/jobapplications', async (req, res) => {
        const newJobApplication = req.body;
        await controller.create(newJobApplication);
        res.status(201);
    })
    .put('/jobapplications/:jobId', async (req, res) => {
        const jobId = req.params.jobId;
        const newJobApplication = req.body;
        await controller.update(newJobApplication, jobId);
        res.status(201).send({
            message: 'Successful update',
        });
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
