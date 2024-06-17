const Router = require('express');
const { getUser } = require('../../controllers/user/getUser');
const { registerUser } = require('../../controllers/user/registerUser');

const userRouter = Router();

userRouter.get('/', getUser);
userRouter.post('/', registerUser);

module.exports = userRouter;