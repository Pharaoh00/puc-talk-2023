const response = require("../responses/user_responses");
const prisma = require("../prisma/user_prisma_index");

module.exports = async (req, res) => {
    try {
        const user_info = await prisma.user.get_user_info(req.token.email);
        res.send(response.user_info(user_info));
    } catch (err) {
        res.status(err.code).send(err);
    }
};