const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const staffRouter = require('./controllers/staff')
const morgan = require('morgan')
const managerRouter = require('./controllers/manager')
const userRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')
const config = require('./utils/config')
const http = require('http')
const app = express()


app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan('dev'))
//app.use(cors)

//controllers
app.use('/api/staff', staffRouter)
app.use('/api/manager', managerRouter)
app.use('/api/user', userRouter)
app.use('/api/login', loginRouter)

const server = http.createServer(app)

server.listen(config.port, () => {
    console.log(`Listening on port ${config.port}`)
})

module.exports = { server, app }