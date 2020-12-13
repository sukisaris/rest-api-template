const UserRouter = require('express').Router();
const UserController = require('../controllers/UserController');
const auth = require('../middlewares/auth');

UserRouter.post('/', UserController.addUser);
UserRouter.get('/', auth, UserController.getUser);
UserRouter.get('/:id', auth, UserController.getUserById);
UserRouter.patch('/:id', auth, UserController.updateUser);
UserRouter.delete('/:id', auth, UserController.deleteUser);

module.exports = UserRouter;
