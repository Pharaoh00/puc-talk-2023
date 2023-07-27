const verify = require("../crypto_handler/crypto_verify_session");
const redis = require("../redis/redis_index");

module.exports = async (req, res, next) => {
    try {
        const parsed_token = JSON.parse(Buffer.from(req.body.token, "base64url"));
        if(parsed_token) {
            const signature = await redis.get_data(parsed_token.session);
            if(signature) {
                const token_verify = await verify(req.body.token, signature);
                if(token_verify) {
                    req.token = parsed_token;
                    next();
                } else {
                    res.send({error: 403, code: 403, info: "Invalid session."});
                }
            } else {
                res.send({error: 404, code: 404, info: "Cannot find session."});
            }
        } else {
            res.send({error: 404, code: 404, info: "Cannot find token."})
        }
    } catch (err) {
        res.send({error: 403, code: 403, info: "Token is not formatted correctly"})
    }
};