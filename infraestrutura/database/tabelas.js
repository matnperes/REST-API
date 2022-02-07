//----------------Responsável por criar tabelas (se não existirem) no banco de dados para suporte em requisições-----------------------//

class Tabelas{
    init(conexao){
        this.conexao = conexao
        this.criarAtendimento()
        this.criarPets()
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

    criarPets(){
      const sql = 'CREATE TABLE IF NOT EXISTS Pets (id int NOT NULL AUTO_INCREMENT, nome varchar(11), imagem varchar(200), PRIMARY KEY(id))';

      this.conexao.query(sql, erro=>{
        if(erro){
          console.log(erro)
        }else{
          console.log('Tabela Pets criada com sucesso');
        }
      })
    }
}
module.exports = new Tabelas
//Exportando classe de Tabelas