const staffRouter = require('express').Router()
const shape = require('../model/shape')
const connection = require('../database')

//Retrieve all
staffRouter.get('/', function(req, res) {
    const sql= 'SELECT * FROM employees'
    const query = connection.query(sql, function(err, result) {
        res.json(result.map(shape))
        console.log('staff: ',result.map(shape))
    })
})

//get a specific worker with a specific id
staffRouter.get('/:id', (req,res) => {
    const sql = `SELECT * FROM employees WHERE id = ${req.params.id}`
    connection.query(sql, function(err, result) {
        res.json(result.map(shape))
    })
})

//to edit a specific workers detail
staffRouter.put('/:id', (req, res) => {
    const body = req.body

    const ndetail = {
        name: req.body.name
    }

    const sql = 'UPDATE employees SET name= ? WHERE id= ?'
    connection.query(sql,  [req.body.name,req.params.id], (err, result) => {
        res.json(body)
    })
})

//to add a new worker
staffRouter.post('/', (req, res) => {
    //const body = req.body

    const newGuy = {
        name: req.body.name,
        title: req.body.title,
        address: req.body.address
    }
    const sql = 'INSERT INTO employees (name, title, address) VALUES(?,?,?)'
    
    connection.query(sql, [newGuy.name, newGuy.title, newGuy.address], (err, result) => {
        res.json(req.body)
    })
})

//to delete a worker
staffRouter.delete('/:id', (req, res) => {
    const sql = 'DELETE FROM employees WHERE id= ?'
    
    connection.query(sql, [req.params.id], (err, result) => {
        res.status(204).end()
    })
})


module.exports=staffRouter