const fs = require('fs')

fs.createReadStream('./assets/salsicha.jpg')
  .pipe(fs.createWriteStream('./assets/salsicha-streaM.jpg'))
  .on('finish', ()=>{
    console.log('A imagem foi escrita com sucesso')
  })