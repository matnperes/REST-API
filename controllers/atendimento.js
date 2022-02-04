////------------------------------Responsável por definir o que cada rota irá fazer-------------------------------------//

//----------------------------------Chamando módulos-------------------------------------//
const Atendimento = require('../models/atendimentos')

module.exports = app =>{

  app.post('/atendimento', (req, res) => {
    const atendimento = req.body
    Atendimento.adiciona(atendimento, res)
    //executa a função quando é recebido requisição do tipo POST (para enviar algo ao servidor)
  }) //POST servirá para enviar dados para o servidor (Neste caso para preencher formulário de agendamento)

  app.get('/atendimento', (req, res) => {
    Atendimento.lista(res)
    //            rota  solicitação,resposta      retorno
    //executa a função quando é recebido requisição do tipo GET (para solicitar algo ao servidor)
  })  //GET neste caso servirá para retornar a lista de agendamento completa 

  app.get('/atendimento/:id', (req, res) =>{
    const id = parseInt(req.params.id)

    Atendimento.buscaPorId(id, res)
  })  //GET neste caso servirá para retornar o agendamento de acordo com o ID passado na rota

  app.patch('/atendimento/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.altera(id, valores, res)
  }) //PATCH neste caso servirá para retornar a lista de agendamento completa 

  app.delete('/atendimento/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    Atendimento.deleta(id, res)
  }) //DELETE neste caso servirá para excluir da tabela o agendamento com o id passado na rota
} 