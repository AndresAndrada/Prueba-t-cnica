const { User } = require("../../db/db");
const { compareUser } = require("../../handler/compareUser");

const registerUser = async (req, res) => {
    const user = req.body;
    try {
        const compararUser = await compareUser(user.password);
        if (!compararUser) {
            const newUser = await User.create(user);
            return res.send({ message: 'User created successfully', newUser });
        }
        res.send({ message: 'User already exists' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { registerUser };