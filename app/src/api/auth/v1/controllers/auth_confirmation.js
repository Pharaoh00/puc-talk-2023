const internal = require("internal-utils");
const response = require("../responses/auth_responses");
const prisma = require("../prisma/auth_prisma_index");

module.exports = async (req, res) => {
    try {
        await internal.cognito.confirmation(req.body.confirmation, req.body.username);
        await prisma.user.confirm(req.body.username); // Pode confirmar um usuário sem ser o seu! =[

        res.send(response.confirmation_success)
    } catch (err) {
        res.status(err.code).send(err);
    }
};