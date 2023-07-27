const crypto = require("crypto");
const dayjs = require("dayjs");
const fs = require('fs/promises');
const { join } = require("path");

module.exports = (token, signature) => {
    return new Promise(async (resolve, reject) => {
        try {
            const public_key = await fs.readFile(join(app_root, "keys", "publicKey.pub"));
            const buffer_token = Buffer.from(token, "base64url");
            const buffer_signature = Buffer.from(signature, "base64url");

            resolve(crypto.verify("RSA-SHA256", buffer_token, public_key, buffer_signature));
        } catch (err) {
            reject(err);
        }
    });
};