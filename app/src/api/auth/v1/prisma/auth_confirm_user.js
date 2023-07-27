const internal = require("internal-utils");

module.exports = (username) => {
    return internal.prisma.user.update({
        where: { username },
        data: { is_confirmed: true }
    });
};