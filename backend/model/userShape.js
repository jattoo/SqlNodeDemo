const userShape = (p) => {
    return{
        username: p.username,
        name: p.name,
        password: p.password,
        id: p.userId
    }
}

module.exports = userShape 