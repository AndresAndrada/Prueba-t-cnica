const { Router } = require('express');
const userRouter = require('./userRouter/userRouter');
const articleRouter = require('./articleRouter/articleRouter');

const router = Router();

router.use('/user', userRouter);
router.use('/article', articleRouter);

module.exports = router;