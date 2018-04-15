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
    .get('/links/homepage', async (req, res) => {
        const linksForHomePage = await controller.getAllLinksForHomePage('yes');
        res.send(linksForHomePage);
    });
};

module.exports = {
    init,
};
