const mysql = require('mysql2')
const conexaoBd = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Vortxbeyond0707',
  database: 'agenda-petshop'
})

module.exports = conexaoBd