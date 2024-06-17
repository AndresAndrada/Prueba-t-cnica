const { Router } = require('express');
const articleRouter = require('./articleRouter/articleRouter');

const router = Router();

router.use('/article', articleRouter);

module.exports = router;