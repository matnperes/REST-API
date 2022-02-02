const { init } = require('express/lib/application');
const customExpress = require('./config/customExpress')
const conexaoBd = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexaoBd.connect((erro)=>{
  if(erro){
    console.log(erro);
  }else{
    console.log("**Conexão estabelecida**")
    
    Tabelas.init(conexaoBd)
 
    const app = customExpress()
 
    app.listen(3000, () => console.log('**Servidor rodando na porta 3000**'))
  }
})