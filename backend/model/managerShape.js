const managerShape = (p) => {
    return{
        Name: p.name,
        Title: p.title,
        Id: p.id,
        Address: p.address,
        managerFor:{
            junior: p.junior
        }
    }
}

module.exports = managerShape 