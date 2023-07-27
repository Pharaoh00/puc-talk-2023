const internal = require("internal-utils");
const response = require("../responses/auth_responses");
const prisma = require("../prisma/auth_prisma_index");

module.exports = async (req, res) => {
    try {
        
        const cognito_user = await internal.cognito.login(req.body.username, req.body.password);
        const user = await prisma.user.get_user_by_sub(cognito_user.sub);
        const token = await internal.crypto.encrypt(user.email);

        await internal.redis.write_data(token.uncoded_token.session, token.signature.toString("base64url"))

        res.send(response.login_success(true, token.payload.toString("base64url")))
    } catch (err) {
        res.status(err.code).send(err);
    }
};