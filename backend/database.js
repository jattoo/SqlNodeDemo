const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'bdhost',
    user: 'username',
    password: 'password',
    database: 'db_name'
})


connection.connect((err) => {
    if(err){ throw err}
    console.log('connected')
})

module.exports = connection