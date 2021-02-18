module.exports = {
    isAdmin: user => user.role.includes('admin'),
    isUser: user => user.role.includes('user'),
    tradStatus: favour => {
        if (favour.status === 'active') {
            favour.status === 'pedido'
        }
        if (favour.status === 'required') {
            favour.status === 'haciendose'
        }
        if (favour.status === 'done') {
            favour.status === 'hecho'
        }
    }
}