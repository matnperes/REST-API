<h1 align='center'>REST API</h1>
<h2 align='center'>NODE.JS/EXPRESS</h2>
<br><br><br>
<h3><strong>DESCRIÇÃO/CONSIDERAÇÕES</strong></h3> 
<br>
-REST API para registro de agendamento de um PetShop através de requisições HTTP (GET, POST, PATCH e DELETE), com tratamento de dados.
<br><br>
-Servidor configurado para ser inicializado com "npm start" (Rodando automaticamente com NodeMon)
<br><br>
- O script da API esta sendo configurado para rodar em localhost:3000/atendimento.<br><br>
- Para criar requisições de verbos HTTP, foi utilizado o ambiente de testes de API POSTMAN.<br><br>
- Para criação de uma base de dados para armazenamento, alterações de dados foi utilizado MySQL com a plataforma MySQL WorkBench.<br><br>


<br>
<h3><strong>SCRIPTS</strong></h3>
<br>
<p><strong>index.js</strong> = responsável por subir o servidor.</p>
<p><strong>customExpress.js</strong> = Responsável por customizar o Express.</p>
<p><strong>controllers/atendimento.js</strong> = Responsável por definir o que cada rota irá fazer.</p>
<p><strong>infraestrutura/conexao.js</strong> = Responsável por definir o banco de dados para conexão.</p>
<p><strong>models/atendimento.js</strong> = Responsável por criar os métodos que serão requisitados em cada rota.</p>
<p><strong>infraestrutura/tabelas.js</strong> = Responsável por criar tabelas (se não existirem) no banco de dados para suporte em requisições.</p>
<br>


<h3><strong>SOFTWARES UTILIZADOS</strong></h3>
<br>
<p>Node.JS = <a>https://nodejs.org/en/</a></p>
<p>PostMan = <a>https://www.postman.com/</a></p>
<p>MySQL/MySQL WorkBench = <a>https://www.mysql.com/</a></p>
<br>

<h3><strong>MODULOS UTILIZADOS</strong></h3>
<br>
<p>BodyParser  = <a href='https://www.npmjs.com/package/body-parser'>Documentação.</a></p>

<p>NodeMon = <a href='https://www.npmjs.com/package/nodemon'>Documentação.</a></p>

<p>Express.js = <a href='https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introduction'>Documentação</a></p>

<p>Consign = <a href='https://www.npmjs.com/package/consign'>Documentação.</a></p>
<br>