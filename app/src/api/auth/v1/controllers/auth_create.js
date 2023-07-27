const internal = require("internal-utils");
const response = require("../responses/auth_responses");
const prisma = require("../prisma/auth_prisma_index");

module.exports = async (req, res) => {
    try {
        const cognito_user = await internal.cognito.create(req.body.username, req.body.password, req.body.name, req.body.email);

        const new_user = await prisma.user.create(req.body.email, req.body.username, req.body.name, cognito_user.UserSub);

        res.send(response.create_success({email: new_user.email, name: new_user.name}));
    } catch (err) {
        res.status(err.code).send(err);
    }
};