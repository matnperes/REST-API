////------------------------Responsável por customizar o Express-------------------------------//

//----------------------------------Chamando módulos-------------------------------------//

const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

//---------------------------Exportando e configurando Express-------------------------------------//

module.exports = () =>{
  const app = express();

  app.use(bodyParser.urlencoded({extended:true}))
  app.use(bodyParser.json())

  consign()
    .include('controllers')
    .into(app)

  return app;
}

