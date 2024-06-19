const Router = require('express');
const { getArticle } = require('../../controllers/article/getArticle');
const { createArticle } = require('../../controllers/article/createArticle');
const { upDataArticle } = require('../../controllers/article/upDataArticle');
const { deleteArticle } = require('../../controllers/article/deleteArticle');
const { checkAuth } = require('../../middleware/auth');

const articleRouter = Router();

articleRouter.get('/', checkAuth, getArticle);
articleRouter.post('/', createArticle);
articleRouter.patch('/:id', upDataArticle);
articleRouter.patch('/articleDelete/:id', deleteArticle);

module.exports = articleRouter;