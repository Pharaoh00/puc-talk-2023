const internal = require("internal-utils");

module.exports = (sub) => {
    return internal.prisma.user.findUnique({
        where: { aws_cognito_usersub: sub }
    })
}