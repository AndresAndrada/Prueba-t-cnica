const { Op } = require("sequelize");
const { Article } = require("../../db/db");

const getArticle = async (req, res) => {
    const { name_article, status, exact_search } = req.query;
    console.log(typeof exact_search, 'SEARCH');
    const stringToBoolean = (str) => str.toLowerCase() === "true";
    const statusBoolean = status !== undefined ? stringToBoolean(status) : undefined;
    console.log(statusBoolean, 'STATUS');

    try {
        const whereClause = {};
        if (name_article) whereClause.name_article = exact_search === 'true' ? name_article : { [Op.substring]: name_article };
        if (statusBoolean !== undefined) whereClause.status = statusBoolean;
        console.log(whereClause, 'ENTREEE');
        const articlefind = await Article.findAll({
            where: whereClause
        });
        res.send(articlefind);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = { getArticle };