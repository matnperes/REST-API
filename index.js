const customExpress = require('./config/customExpress')
const conexaoBd = require('./infraestrutura/conexao')
const app = customExpress()

conexaoBd.connect((erro)=>{
  if(erro){
    console.log(erro);
  }else{
    app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    console.log("Conexão estabelecida")
  }
})
