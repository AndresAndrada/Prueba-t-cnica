const { Article } = require('../../db/db');

const upDataArticle = async (req, res) => {
    const { id } = req.params;
    const article = req.body;
    try {
        await Article.update(article, { where: { id } });
        const ArticleId = await Article.findByPk(id);
        return res.send({ message: 'Article modified successfully', ArticleId });
    } catch (error) {
        res.status(400).send({ message: error.message });
    };
};

module.exports = { upDataArticle };