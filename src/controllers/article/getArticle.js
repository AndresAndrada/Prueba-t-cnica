const { Article } = require("../../db/db");

const getArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const articlefind = !id
            ? await Article.findAll()
            : await Article.findByPk(id);
        res.send(articlefind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getArticle };