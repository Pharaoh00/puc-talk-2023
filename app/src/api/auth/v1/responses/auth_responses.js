module.exports = {
    create_success: (user) => { return {create: true, user} },
    confirmation_success: { confirmation: true },
    login_success: (value, session) => { return {login: value, token: session}}
}