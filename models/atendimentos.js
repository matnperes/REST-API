const { send } = require('express/lib/response')
const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento{
  adiciona(atendimento, res){
    const dataCriacao = new Date()
    const data = moment(atendimento.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
    const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
    const clienteEhValido = atendimento.cliente.length >= 4
    const servicoEhValido = atendimento.servico == 'banho' || atendimento.servico == 'tosa' || atendimento.servico == 'banho e tosa'
    
    
    const validacoes = [{
      nome: 'data',
      valido: dataEhValida,
      mensagem: "A data deve ser maior que a data atual"
    }, {
      nome: 'nome',
      valido: clienteEhValido,
      mensagem: "O nome deve ter pelo menos 5 caracteres"
    }, 
    {
      nome: 'servico',
      valido: servicoEhValido,
      mensagem: "No momento temos apenas serviços de banho e tosa"
    }
  ]
    
    const mensagemDeErro = []
    const erros = validacoes.filter(erro => {
      if(!erro.valido){ 
        mensagemDeErro.push(erro.mensagem)
        return erro
        }
      })
      
    const existemErros = erros.length

    if(existemErros){
      res.status(400).json(mensagemDeErro)
    }else{
      const atendimentoDatado ={...atendimento, dataCriacao, data}

      const sql = 'INSERT INTO Atendimentos SET ?'
      
      conexao.query(sql, atendimentoDatado, (erro, resultados) =>{
        if (erro){
          res.status(400).json(erro)
        } else{
          res.status(201).json(atendimento)
        }
      })
    }
  }

  lista(res){
    const sql = 'SELECT * FROM Atendimentos'

    conexao.query(sql, (erro, resultados) =>{
      if(erro){
        res.status(400).json(erro)
      }else{
        res.status(200).json(resultados)
      }
    })
  }

  buscaPorId(id, res) {
    const sql = `SELECT * FROM Atendimentos WHERE id=${id}`

    

    conexao.query(sql, (erro, resultados)=>{
      const atendimento = resultados[0]
      if(erro){
        res.status(400).json(erro)
      }else{
        res.status(200).json(atendimento)
      }
    })
  }

  altera(id, valores, res){
    if(valores.data){
      valores.data = moment(valores.data, 'DD-MM-YYYY').format('YYYY-MM-DD HH:mm:ss')
    }
    const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

    conexao.query(sql, [valores, id], (erro, resultados) =>{
      if(erro){
        res.status(400).json(erro)
      } else{
          res.status(200).json({...valores, id})
      }
    })
  }

  deleta(id, res){
    const sql = 'DELETE FROM Atendimentos WHERE id=?'

    conexao.query(sql, id, (erro, resultados)=>{
      if(erro){
        res.status(400).json(erro)
      }else{
        res.status(200).json({id})
      }
    })
  }
}


module.exports = new Atendimento