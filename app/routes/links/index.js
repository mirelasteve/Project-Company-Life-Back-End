const apiRoutes = require('./links.api.routes');

const init = (app, data) => {
    apiRoutes.init(app, data);
};

module.exports = {
    init,
};