//----------------Responsável por criar tabelas (se não existirem) no banco de dados para suporte em requisições-----------------------//

class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarAtendimento()
    }
// init é uma função que receberá como argumento a conexão importada em index.js e  está inicializando o metódo abaixo

    criarAtendimento(){
      const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar (50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar (20) NOT NULL, observacoes text, PRIMARY KEY(id))'
//    Sintaxe padrão para criação de tabelas em MySQL

      this.conexao.query(sql, (erro) =>{
// query será responsável por obter ou enviar informações para o Bnaco de dados através de sintaxe, o segundo parametro é uma função de callback que será responsável por tratar a criação das tabelas
        if(erro){
          console.log(erro)
        }else{
          console.log('Tabelas criadas com sucesso')
          }
      })
    }
}
module.exports = new Tabelas
//Exportando classe de Tabelas