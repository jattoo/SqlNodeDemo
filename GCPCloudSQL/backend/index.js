const express = require('express')
const app = express()
require('dotenv').config()
const connection = require('./database')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM employees'
    connection.query(sql, function (err, result) {
        if(err) throw err
        res.json(result)
    }
    )
})

app.post('/', (req, res) => {
    const newEmployee = {
        name: req.body.name,
        title: req.body.title,
        address: req.body.address
    }

    const sql = 'INSERT INTO employees(name, title, address) VALUES(?,?,?)'

    connection.query(sql, [newEmployee.name, newEmployee.address, newEmployee.title], (err, result) => {
        res.json(req.body)
    })
})
app.listen(3000, () => console.log('App running on port 3000'))