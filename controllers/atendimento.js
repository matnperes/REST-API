module.exports = app =>{
  app.get('/atendimento', (req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))
//            rota  solicitação,resposta      retorno
//executa a função quando é recebido requisição do tipo GET (para solicitar algo ao servidor)

  app.post('/atendimento', (req, res) => {
    console.log(req.body)
    res.send('Você está na rota de atendimentos e está realizando um POST')
  })
//executa a função quando é recebido requisição do tipo POST (para enviar algo ao servidor)
} 