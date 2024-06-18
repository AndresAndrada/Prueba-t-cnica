const { Article } = require("../../db/db");

const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
        try {
            const articleFind = await Article.findByPk(id)
            if (articleFind.status === false) {
                await Article.update({ status: true }, { where: { id } });
                return res.send({ message: 'Article active', articleFind });
            }
            if (articleFind.status === true) {
                await Article.update({ status: false }, { where: { id } });
                return res.send({ message: 'Article delete', articleFind });
            }
        } catch (error) {
            throw error;
        }
    } catch (error) {
        res.send({ message: error.message });
    };
};

module.exports = { deleteArticle };