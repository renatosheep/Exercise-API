const fs = require('fs');

const data = 'Aprendendo JS';
fs.writeFile('arquivo.txt', data, (err) => {
    if (err) throw err;
  console.log('O arquivo foi criado!');
});
