////------------------------Responsável por customizar o Express-------------------------------//

//----------------------------------Chamando módulos-------------------------------------//

const express = require('express');
const consign = require('consign');
const app = express();

//---------------------------Exportando e configurando Express-------------------------------------//

module.exports = () =>{

  app.use(express.urlencoded({extended:true}))
  app.use(express.json())

  consign()
    .include('controllers')
    .into(app)

  return app;
}

