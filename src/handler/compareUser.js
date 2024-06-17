const { User } = require("../db/db")

const compareUser = async (email, password) => {
    const userfind = await User.findOne({ where: { email, password } });
    if (!userfind.dataValues) {
        console.log('ENTRE');
        return true;
    };
    return false;
};

module.exports = { compareUser };