const multer = require('multer');

const {
    Router,
} = require('express');

const JobApplicationsController = require('./jobApplications.controller');

const init = (app, data) => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, '../front-end-company-life/lifeProject/storage');
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + file.originalname);
        },
    });
    const upload = multer({ storage: storage });
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
    .post('/jobapplications', upload.any(), async (req, res) => {
        const newJobApplication = req.body;
        const links = req.files.map((file) => file.filename);
        newJobApplication.cv = links[0];
        newJobApplication.coverLetter = links[1];
        await controller.create(newJobApplication);
        res.status(201).send({
            message: 'Successful job application',
        });
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
