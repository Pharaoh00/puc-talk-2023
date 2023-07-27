module.exports = {
    create: require("./auth_create_middleware"),
    confirmation: require("./auth_confirmation_middleware"),
    logout: require("./auth_logout_middleware")
};