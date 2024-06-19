const { User } = require("../../db/db");
const { compareUser } = require("../../handler/compareUser");
const { tokenSign } = require("../../handler/generateToken");

const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });
        if (!user?.dataValues) return res.status(404).send({ error: 'User not found' })
        const checkPassword = await compareUser(password);
        const tokenSession = await tokenSign(user)
        checkPassword ? res.send({ user, tokenSession }) : res.status(409).send({ error: 'Username or password is invalidate' });
    } catch (error) {

    }
}

module.exports = { Login }