const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app =>{
  app.get('/atendimento', (req, res) => {
    Atendimento.lista(res)
    //            rota  solicitação,resposta      retorno
    //executa a função quando é recebido requisição do tipo GET (para solicitar algo ao servidor)
})

  app.get('/atendimento/:id', (req, res) =>{
    const id = parseInt(req.params.id)

    Atendimento.buscaPorId(id, res)
  })

  app.post('/atendimento', (req, res) => {
    const atendimento = req.body
    Atendimento.adiciona(atendimento, res)
    //executa a função quando é recebido requisição do tipo POST (para enviar algo ao servidor)
  })

  app.patch('/atendimento/:id', (req, res)=>{
    const id = parseInt(req.params.id)
    const valores = req.body

    Atendimento.altera(id, valores, res)
  })

  app.delete('/atendimento/:id', (req, res)=>{
    const id = parseInt(req.params.id)

    Atendimento.deleta(id, res)
  })
} 