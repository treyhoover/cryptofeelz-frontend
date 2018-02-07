const nextRoutes = require('next-routes');
const routes = module.exports = nextRoutes();

routes.add('index', '/');
routes.add('feelz/new', '/feelz');
routes.add('feelz/show', '/feelz/:feelzId');
