const userRouter = require('express').Router()
const userShape = require( '../model/userShape')
const bcrypt = require('bcrypt')
const connection = require('../database')


//Get all Users
userRouter.get('/', (req, res) => {
    const sql = 'SELECT * FROM user'
    const query = connection.query(sql, (err, result) => {
        res.json(result.map(userShape))
    })
})

userRouter.post('/',  async (req, res) => {
    try{
        const body = req.body
        //Here we encrypt the pass
        const saltRounds = 10
        const passwordHash =  await bcrypt.hash(body.password, saltRounds)
        const newUser =  {
            username: req.body.username,
            password: passwordHash,
            name: req.body.name
        }
        if(newUser.name <= 0 || newUser.username <= 0 || newUser.password <= 0){
            res.Status(401).json({ error : 'wrong details'})
        } else {
            const sql = 'INSERT INTO user(username, password, name) VALUES (?,?,?)'
            connection.query(sql, [newUser.username, newUser.password, newUser.name], (err, result) => {
                res.json({'New User' : `${newUser.name}`})
            })
        }
    } catch (exception){
        console.log(exception)
        res.status(500).json({ error: 'Something went wrong'})
    }
})
module.exports= userRouter