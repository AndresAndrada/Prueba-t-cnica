const { verifyToken } = require('../handler/verifyToken');

const checkAuth = async (req, res, next) => {
    try {
        console.log(req?.headers, 'ENTREEE');
        const token = req?.headers?.authorization ? req?.headers?.authorization.split(' ').pop() : undefined
        const tokenDAta = token ? await verifyToken(token) : undefined;
        console.log(tokenDAta, 'Token data');
        tokenDAta?.iat ? next() : res.status(409).send({ error: "Token is not define" });
    } catch (error) {
        console.error({ error: error.message });
    }
}

module.exports = { checkAuth };