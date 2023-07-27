const internal = require("internal-utils");

module.exports = (email) => {
    return internal.prisma.user.findUniqueOrThrow({
        where: { email }
    })
};