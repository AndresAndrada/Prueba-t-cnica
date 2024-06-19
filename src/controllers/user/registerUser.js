const { User } = require("../../db/db");
const { compareUser } = require("../../handler/compareUser");

const registerUser = async (req, res) => {
    const user = req.body;
    console.log(user, 'REQBODY');
    try {
        const compararUser = await compareUser(user.password);
        console.log(compararUser, 'COMPARA REGISTER');
        if (!compararUser) {
            // const newUser = await User.create({ name, lastName, dni, email, password });
            const newUser = await User.create(user);
            return res.send({ message: 'User creado exitosamente', newUser });
        }
        res.send({ message: 'Este usuario esta registrado' });
    } catch (error) {
        res.status(304).send({ message: error.message });
    };
};

module.exports = { registerUser };