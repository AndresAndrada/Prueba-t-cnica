const { User } = require("../db/db")

const compareUser = async (password) => {
    try {
        const userfind = await User.findOne({ where: { password } });
        console.log(userfind, 'COMPARE');
        if (userfind?.dataValues) {
            return true;
        };
        console.log('ENTRE');
        return false;
    } catch (error) {
        console.error({ error: 'Error' });
    }
};

module.exports = { compareUser };