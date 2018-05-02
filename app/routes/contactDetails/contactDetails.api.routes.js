const {
    Router,
} = require('express');

const ContactDetailsController = require('./contactDetails.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new ContactDetailsController(data);
    app.use('/api', router);

    router
    .get('/contactdetails', async (req, res) => {
        const contactDetails = await controller.getAllContactDetails();
        res.send(contactDetails);
    })
    .get('/contactdetails/map', async (req, res) => {
        const mapAddress = await controller.getMapAddress();
        res.send(mapAddress);
    })
    .post('/contactdetails', async (req, res) => {
        const newContactDets = req.body;
        await controller.create(newContactDets);
        res.status(201);
    })
    .put('/contactdetails', async (req, res) => {
        const editedContactsDets = req.body;
        const id = editedContactsDets.id;
        await controller.update(editedContactsDets, id);
        res.status(201).send({
            message: 'Successful update',
        });
    })
    .delete('/contactdetails', async (req, res) => {
        const editedContactsDets = req.body;
        const id = editedContactsDets.id;
        await controller.delete(id);
        res.status(201);
    });
};

module.exports = {
    init,
};

