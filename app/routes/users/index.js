const apiRoutes = require('./users.api.routes');

const init = (app, data) => {
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};
