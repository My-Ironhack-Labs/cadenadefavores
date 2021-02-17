module.exports = {
    isAdmin: user => user.role.includes('admin'),
    isUser: user => user.role.includes('user')
}