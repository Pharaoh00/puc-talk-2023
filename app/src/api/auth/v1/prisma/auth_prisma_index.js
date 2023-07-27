module.exports = {
    user: {
        create: require("./auth_create_user"),
        confirm: require("./auth_confirm_user"),
        get_user_by_sub: require("./auth_get_user_by_sub")
    }
};