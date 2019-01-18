const managerRouter = require('express').Router()
const managerShape = require('../model/managerShape')
const connection = require('../database')

//Retrieving all managers
managerRouter.get('/', (req, res) => {
    const sql = 'SELECT * FROM managers'

    const query = connection.query(sql, (err, result) => {
        res.json(result.map(managerShape))
    })
})

//To get a specific manager by id
managerRouter.get('/:id', (req, res) => {
    const sql = `SELECT * FROM managers WHERE id=${req.params.id}`

    connection.query(sql, (err, result) => {
        res.json(result.map(managerShape))
    })
})

//To update a manager's name
managerRouter.put('/:id', (req, res) => {
    const body= req.body
    const sql = 'UPDATE managers SET name=? WHERE id=?'

    connection.query(sql, [req.body.name,req.params.id ], (err, result) => {
        res.json(body)
    })
})


//To add a new manager
managerRouter.post('/', (req, res) => {
    const newManager = {
        name: req.body.name,
        junior: req.body.junior
    }
    const sql = 'INSERT INTO managers(name, junior) VALUES(?,?)'
    connection.query(sql, [newManager.name, newManager.junior], (err, result) => {
        res.json(newManager)
    })
})


//To delete a manager
managerRouter.delete('/:id', (req, res) => {
    const sql = `DELETE FROM managers WHERE id=${req.params.id}`
    con.query(sql, (err, result) => {
        if(err) throw err
        res.sendStatus(204).end()
    })
})





module.exports=managerRouter