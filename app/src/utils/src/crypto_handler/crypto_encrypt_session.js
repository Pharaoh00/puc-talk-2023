const crypto = require("crypto");
const dayjs = require("dayjs");
const fs = require('fs/promises');
const { join } = require("path");

module.exports = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const private_key = await fs.readFile(join(app_root, "keys", "privateKey.pem"));
            const session_token = crypto.randomBytes(512).toString("base64url");
            let now = dayjs();
            const uncoded_token = {
                email: email,
                session: session_token,
                iat: now.unix(),
                exp: now.add(30, "day").unix()
            };
            const coded_token = Buffer.from(JSON.stringify(uncoded_token), "utf8");
            const signature = crypto.sign("RSA-SHA256", coded_token, private_key);
            resolve({payload: coded_token, signature, uncoded_token});
        } catch (err) {
            reject(err);
        }
    });
};