const {
    Router,
} = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');

const AuthController = require('./auth.controller');

const init = (app, data) => {
    const router = new Router();
    const controller = new AuthController(data);
    app.use('/api', router);

    // passport.authenticate('jwt', {
    //     session: false,
    // }),
    router
        .post('/login', async(req, res) => {
            const user = req.body;
            // console.log(req.body);
            const userFound = await controller.findUser(user.email);
            if (userFound) {
                // console.log('......', user);
                bcrypt.compare(user.password, userFound.password,
                    (err, response) => {
                        if (response) {
                            const payload = {
                                sub: userFound.id,
                                id: userFound.id,
                                email: userFound.email,
                                password: userFound.password,
                                iss: 'telerik',
                                admin: userFound.isAdmin,
                            };
                            const secret = 'xxx';
                            const token = jwt.encode(payload, secret);
                            res.status(200).send({
                                token: token,
                            });
                        } else {
                            res.status(401).send({
                                err: `Wrong password`,
                            });
                        }
                    });
            } else {
                res.status(401).send({
                    err: `User doesn't exist`,
                });
            }
        })
        .post('/register', async(req, res) => {
            const newUser = req.body;
            const userFound = await controller.findUser(newUser.email.trim());
            if (!userFound) {
                const plainTextPass = newUser.password.trim();
                const saltRounds = 10;
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(plainTextPass, salt, (errHash, hash) => {
                        const user = {
                            id: newUser.id,
                            email: newUser.email,
                            password: hash,
                            isAdmin: newUser.isAdmin,
                            iss: 'telerik',
                            admin: newUser.isAdmin,
                        };
                        controller.createUser(user).then(async(u) => {
                            const userFoundD = await controller.findUser(newUser.email);
                            console.log('FOUND FOUND FOUND', userFoundD.dataValues);
                            const secret = 'xxx';
                            const token = jwt.encode(userFoundD.dataValues, secret);
                            res.status(200).send({
                                msg: 'Successful registration',
                                token: token
                            });
                        });
                    });
                });

                res.status(200).send({
                    msg: 'Successful registration',
                    token: token
                });
            } else {
                res.status(401).send({
                    err: 'User already exist',
                });
            };
        });
};

module.exports = {
    init,
};