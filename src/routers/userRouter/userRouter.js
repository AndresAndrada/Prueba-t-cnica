const Router = require('express');
const { registerUser } = require('../../controllers/user/registerUser');
const { Login } = require('../../controllers/user/login');

const userRouter = Router();

userRouter.post('/login', Login)
userRouter.post('/register', registerUser);

module.exports = userRouter;