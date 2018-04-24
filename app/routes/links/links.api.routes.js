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
        res.status(201).send('Link Details added!');
    })
    .put('/links', async (req, res) => {
        const editedLinkDets = req.body;
        const id = editedLinkDets.id;
        await controller.update(editedLinkDets, id);
        res.status(201).send('Link Details edited!');
    })
    .delete('/links', async (req, res) => {
        const editedLinkDets = req.body;
        const id = editedLinkDets.id;
        await controller.delete(id);
        res.status(201).send('Link Details deleted!');
    })
    .get('/links/homepage', async (req, res) => {
        const linksForHomePage =
        await controller.getAllLinksForHomePage(null);
        res.send(linksForHomePage);
    });
};

module.exports = {
    init,
};
