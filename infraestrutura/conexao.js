//------------------------------Responsável por definir o banco de dados para conexão-------------------------------------//

//----------------------------------Chamando módulos-------------------------------------//
const mysql = require('mysql2')

//--Definindo configurações do banco de dados através do método createConnection tendo como argumento um objeto com caracteristicas do BD para conexão--//
const conexao = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Vortxbeyond0707',
  database: 'agenda-petshop'
})

//Exportando conexão
module.exports = conexao