const joi = require("joi");
const error_codes = require("internal-utils").error.codes;

module.exports = async (payload) => {
    try {
        const validation = await joi.object({
            token: joi.string().required()
        }).validateAsync(payload);
        
        return validation
    } catch (err) {
        throw ({code: error_codes[403].code, info: err.details[0].message});
    }
};