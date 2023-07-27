const validate = require("../validations/validation_user_get_info");

module.exports = async (req, res, next) => {
    try {
        const validation = await validate(req.body);
        req.body = validation;
        next();
    } catch (err) {
        res.status(err.code).send(err);
    }
};