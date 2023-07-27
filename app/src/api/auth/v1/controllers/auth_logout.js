const internal = require("internal-utils");
const response = require("../responses/auth_responses");

module.exports = async (req, res) => {
    try {
        internal.redis.delete_data(req.token.session)
        res.send({logout: true})
    } catch (err) {
        res.status(err.code).send(err);
    }
};