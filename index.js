//---------------------------------esse código index.js é responsável por subir o servidor.--------------------------------------//


//por etapas, ele está: estabelencdo conexão com o banco de dados, se sucesso parte para criar tabelas (se não criadas), traz o express para o script e por fim, configura a porta de escuta do servidor

//----------------------------------Chamando módulos-------------------------------------//

const customExpress = require('./config/customExpress')
//Importa express customizado.
const conexaoBd = require('./infraestrutura/database/conexao')
//Importa a conexao com o BD
const Tabelas = require('./infraestrutura/database/tabelas')
//Importa o script de criação de tabelas

//-------------------------------Estabelecendo conexões-------------------------------------//

conexaoBd.connect((erro)=>{
//o metodo connect tem como argumento o erro, e abaixo notamos que só irá prosseguir com as conexões se não houver erros com a conexão do banco de dados
  if(erro){
    console.log(erro);
  
  }else{
    console.log("**Conexão estabelecida**")
    
    Tabelas.init(conexaoBd)
//  Inicia a criação de tabelas no banco de dados passado como argumento
    const app = customExpress()
// O valor desta variável, é op Express.js customizado
    app.listen(3000, () => console.log('**Servidor rodando na porta 3000**'))
// O método listen() tem como função definir a porta de escuta do servidor. (porta, callback()) 
  }
})
