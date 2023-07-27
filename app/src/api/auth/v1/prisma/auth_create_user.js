const internal = require("internal-utils");

module.exports = (email, username, name, aws_cognito_usersub) => {
    return internal.prisma.user.create({
        data: {
            email,
            username,
            name,
            aws_cognito_usersub,
            is_confirmed: false
        }
    });
}