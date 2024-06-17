const { User } = require("../../db/db");

const getUser = async (req, res) => {
    const { email } = req.body;
    try {
        const userfind = !email
            ? await User.findAll()
            : await User.findAll({ where: { email } });
        res.send(userfind);
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { getUser };