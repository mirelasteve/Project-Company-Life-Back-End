const {
    Router,
} = require('express');

const LinksController = require('./links.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new LinksController(data);
    app.use('/api', router);

    router
    .get('/links', async (req, res) => {
        const links = await controller.getAllLinks();
        res.send(links);
    })
    .post('/links', async (req, res) => {
        const newLinks = req.body;
        await controller.create(newLinks);
        res.status(201);
    })
    .put('/links', async (req, res) => {
        const editedLinkDets = req.body;
        const id = editedLinkDets.id;
        await controller.update(editedLinkDets, id);
        res.status(201).send({
            message: 'Successful update',
        });
    })
    .delete('/links', async (req, res) => {
        const editedLinkDets = req.body;
        const id = editedLinkDets.id;
        await controller.delete(id);
        res.status(201);
    })
    .get('/links/homepage/social', async (req, res) => {
        const hiddenValue = null;
        const typeValue = 'social';
        const linksForHomePage =
        await controller.getAllLinksForHomePage(hiddenValue, typeValue);
        res.send(linksForHomePage);
    })
    .get('/links/homepage/action', async (req, res) => {
        const hiddenValue = null;
        const typeValue = 'action';
        const linksForHomePage =
        await controller.getAllLinksForHomePage(hiddenValue, typeValue);
        res.send(linksForHomePage);
    });
};

module.exports = {
    init,
};
