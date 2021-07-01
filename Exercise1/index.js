const https = require('https');

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
  let data = '';

  // Um bloco de dados foi recebido.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // Toda a resposta foi recebida. Exibir o resultado.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

}).on("error", (err) => {
  console.log("Erro: " + err.message);
});