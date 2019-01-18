const loginRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userShape = require( '../model/userShape')
const connection = require('../database')


loginRouter.post('/',  (req,res) => {
    const body = req.body
    const loginUser = {
        username: body.username,
        password: body.password
    }
    const user = 'SELECT * FROM user WHERE username=?'
    
    connection.query(user, [loginUser.username], async (err, result) => {
        //TODO: get a user if it exists
        const userExist = result.map(userShape)


        //TODO: return a boolean if user's pass matches or not
        const confirmPass = userExist === null ? 
            false
            :
            await bcrypt.compare(loginUser.password, String(userExist.map(user => user.password)))
        
        //TODO: handle a wrong password scenario
        try {
            if (!(userExist && confirmPass)){
                return res.status(401).json({ error: 'Wrong credentials!'})
            }
        } catch(exception){
            console.log(exception)
        }
           
        //TODO: save users details in an object for signing later
        const UserToken = {
            username: String(userExist.map(user => user.username)),
            id: String(userExist.map(user => user.id))
        }
       
        //TODO: we sign the user's details with help of the process env secrets
        const token = jwt.sign(UserToken, process.env.SECRET)

        //TODO: We return a response with the users details on it
        res.status(200).send({token, username: String(userExist.map(user => user.username)), name:  String(userExist.map(user => user.name))})
    })
})


module.exports=loginRouter