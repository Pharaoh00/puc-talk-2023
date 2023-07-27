module.exports = {
    cognito: {
        create: require("./src/cognito/cognito_create"),
        confirmation: require("./src/cognito/cognito_confirmation"),
        login: require("./src/cognito/cognito_login")
    },
    error: {
        codes: require("./src/error/codes")
    },
    prisma: require("./src/prisma_handler/prisma_index"),
    aws: require("./src/aws/aws_index"),
    crypto: {
        encrypt: require("./src/crypto_handler/crypto_encrypt_session")
    },
    redis: require("./src/redis/redis_index"),
    middlewares: {
        verify_session: require("./src/middlewares/middleware_verify_session")
    }
};