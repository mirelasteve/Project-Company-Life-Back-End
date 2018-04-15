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
    });
};

module.exports = {
    init,
};

