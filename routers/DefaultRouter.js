const DefaultRouter = require('express').Router();
const DefaultController = require('../controllers/DefaultController');

DefaultRouter.post('/login', DefaultController.login);
DefaultRouter.get('/*', DefaultController.pageNotFound);

module.exports = DefaultRouter;
