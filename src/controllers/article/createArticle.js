const { Article } = require("../../db/db");
const moment = require('moment');

const createArticle = async (req, res) => {
    const article = req.body;

    // Asegúrate de que `date_modification` esté en formato ISO
    if (article.date_modification) {
        article.date_modification = moment(article.date_modification, 'YYYY/MM/DD').format('YYYY-MM-DD');
    }
    console.log(article);
    try {
        if (!article.name_article) return res.status(300).send({ message: 'Require name' });
        const newArticle = await Article.create(article);
        return res.send({ message: 'Article created successfully', newArticle });
    } catch (error) {
        res.status(400).send({ message: 'The article already exists' });
    };
};

module.exports = { createArticle };