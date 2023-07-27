module.exports = {
    user_info: (user) => { return {
        email: user.email,
        username: user.username,
        name: user.name
    } }
}