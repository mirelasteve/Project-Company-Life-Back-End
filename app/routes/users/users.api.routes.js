const {
    Router,
} = require('express');

const UsersController = require('./users.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new UsersController(data);
    app.use('/api', router);

    router
        .get('/users', async(req, res) => {
            const users = await controller.getAllUsers();
            res.send(users);
        })
        .get('/users/:name', async(req, res) => {
            const email = req.params.name;
            const userData =
                await controller.getEmail(email);
            res.send(userData);
        });
};

module.exports = {
    init,
};